import { Link, useParams } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb'
import Button from '../../components/Button'
import ProductCard from '../../components/ProductCard'
import Checkbox from '../../components/CheckBox'
import { Icon } from '@iconify/react'
import SelectFilter from './SelectFilter'
import PriceSlider from './PriceSlider'
import { useEffect, useState } from 'react'
import { useParamsFilter } from '../../hooks/useParams'
import {
  PARAMS_FILTER,
  PRICE_RANGE,
  COLOR_LIST,
  BRAND_LIST,
} from '../../utils/constants'
import { productService } from '../../services/productService'
import Pagination from '../../components/Pagination'
import { useSetParamFilter } from '../../hooks/useParams'
import formatter from 'utils/formatterMoney'
import { useSnackbar } from 'notistack'

const Product = () => {
  const params = useParamsFilter()

  const { setParamFilter, deleteParamFilter } = useSetParamFilter()

  const { pageIndex, cateId } = useParams()

  const { enqueueSnackbar } = useSnackbar()

  const [productList, setProductList] = useState([])
  const [pageParam, setPageParam] = useState({})

  const getAllProducts = async () => {
    const response = await productService.getProducts(pageIndex, cateId)
    if (response.success === true) {
      setProductList(response.products)
      setPageParam(response.params)
    } else {
      setProductList([])
      setPageParam({})
      enqueueSnackbar(response.message, {
        variant: 'error',
      })
    }
  }

  const getProducts = async (pageIndexFilter) => {
    getParamSort(params)
    const response = await productService.getProductsByParams(
      pageIndexFilter,
      params,
      cateId
    )
    if (response.success === true) {
      setProductList(response.products)
      setPageParam(response.params)
    } else {
      setProductList([])
      setPageParam({})
      enqueueSnackbar(response.message, {
        variant: 'error',
      })
    }
  }

  useEffect(() => {
    const getProductList = async () => {
      if (Object.keys(params).length > 0) {
        getProducts(pageIndex)
      } else {
        getAllProducts()
      }
    }
    getProductList()
  }, [cateId, pageIndex])

  const getParamSort = (params) => {
    const { orderby } = params
    if (orderby) {
      switch (orderby) {
        case 'price':
          params.sort = {
            sortField: 'price',
            sortType: 1,
          }
          break
        case 'price-desc':
          params.sort = {
            sortField: 'price',
            sortType: -1,
          }
          break
        default:
          break
      }
    }
  }

  const PRICE_RANGE_PARAMS = [
    parseInt(params.min_price) || PRICE_RANGE[0],
    parseInt(params.max_price) || PRICE_RANGE[1],
  ]

  const openFilterMobile = () => {
    const filterMobile = document.querySelector(
      '.section-shop__sidebar--mobile'
    )
    console.log(filterMobile.style.display)
    if (filterMobile.style.display === 'block') {
      filterMobile.style.display = 'none'
    } else {
      filterMobile.style.display = 'block'
    }
  }

  const handleClickFilter = async (e) => {
    const filter = e.currentTarget.dataset.filter
    const value = e.currentTarget.dataset.value
    setParamFilter(filter, value)
    params[filter] = value
    getProducts(1)
  }

  const handleFilterPriceRange = async (minPrice, maxPrice) => {
    params[PARAMS_FILTER.minPrice] = minPrice
    params[PARAMS_FILTER.maxPrice] = maxPrice
    getProducts(1)
  }

  const displayActiveFilter = (item) => {
    const [param, value] = item
    switch (param) {
      case PARAMS_FILTER.minPrice:
        return `Min ${formatter(value)}`
      case PARAMS_FILTER.maxPrice:
        return `Max ${formatter(value)}`
      default:
        const filter =
          COLOR_LIST.find((color) => color.colorValue === value)?.colorName ||
          BRAND_LIST.find((brand) => brand.brandValue === value)?.brandName
        return filter || ''
    }
  }

  const handleRemoveFilter = async (e) => {
    const paramToRemove = e.currentTarget.dataset.filter
    deleteParamFilter(paramToRemove)
    delete params[paramToRemove]
    getProducts(1)
  }

  const activeFilterList = []
  for (const value of Object.values(PARAMS_FILTER)) {
    if (value !== PARAMS_FILTER.sort && params.hasOwnProperty(value)) {
      activeFilterList.push([value, params[value]])
    }
  }

  return (
    <>
      <div className="page-header">
        <Breadcrumb targetFormat="snake"></Breadcrumb>
        <div className="page-header__title">Shop</div>
      </div>
      <section className="section-shop">
        <div className="section-shop__container container--default">
          <div className="section-shop__content">
            <div className="section-shop__sidebar">
              <div className="sidebar-filter">
                {activeFilterList.length > 0 && (
                  <div className="sidebar-filter__item sidebar-filter-active">
                    <div className="sidebar-filter__title">Active filters</div>
                    <div className="sidebar-filter-active__content">
                      <ul>
                        {activeFilterList.map(
                          (item, index) =>
                            displayActiveFilter(item) && (
                              <li
                                key={index}
                                data-filter={item[0]}
                                onClick={handleRemoveFilter}
                                className="sidebar-filter-active__item"
                              >
                                <Icon
                                  className="sidebar-filter-active__button"
                                  icon="iconoir:cancel"
                                />
                                <span className="sidebar-filter-active__title">
                                  {displayActiveFilter(item)}
                                </span>
                              </li>
                            )
                        )}
                      </ul>
                    </div>
                  </div>
                )}

                <div className="sidebar-filter__item sidebar-filter-price">
                  <div className="sidebar-filter__title">Price</div>
                  <div className="sidebar-filter-price__content">
                    <PriceSlider
                      priceRange={PRICE_RANGE}
                      priceRangeParams={PRICE_RANGE_PARAMS}
                      handleFilterPriceRange={handleFilterPriceRange}
                    />
                  </div>
                </div>
                <div className="sidebar-filter__item sidebar-filter-color">
                  <div className="sidebar-filter__title">Color</div>
                  <div className="sidebar-filter-color__content">
                    <ul>
                      {COLOR_LIST.map((item, index) => (
                        <li
                          key={index}
                          id={item.id}
                          className={`sidebar-filter-color__item${
                            item.colorValue === params?.color
                              ? ' sidebar-filter-color__item--selected'
                              : ''
                          }`}
                        >
                          <Link
                            className="sidebar-filter__link sidebar-filter-color__link"
                            onClick={handleClickFilter}
                            data-filter={PARAMS_FILTER.color}
                            data-value={item.colorValue}
                          >
                            <span
                              className="sidebar-filter-color__icon"
                              style={{ background: item.hex }}
                            ></span>
                            <span className="sidebar-filter__link--title">
                              {item.colorName}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="sidebar-filter__item sidebar-filter-brand">
                  <div className="sidebar-filter__title">Brand</div>
                  <div className="sidebar-filter-brand__content">
                    <ul>
                      {BRAND_LIST.map((item, index) => (
                        <li
                          key={index}
                          className={`sidebar-filter-brand__item${
                            params?.brand === item.brandValue
                              ? ' sidebar-filter-brand__item--selected'
                              : ''
                          }`}
                        >
                          <Link
                            className="sidebar-filter__link sidebar-filter-size__link"
                            onClick={handleClickFilter}
                            data-filter={PARAMS_FILTER.brand}
                            data-value={item.brandValue}
                          >
                            <Checkbox
                              checked={
                                params?.brand === item.brandValue ? true : false
                              }
                              color="blue"
                              size="c-form"
                            />
                            <span className="sidebar-filter__link--title">
                              {item.brandName}{' '}
                              <span className="sidebar-filter-brand__link--count"></span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-shop__main">
              {productList.length > 0 ? (
                <>
                  <div className="shop-main-order">
                    <div className="shop-main-order__count">
                      Showing {productList.length} results
                    </div>
                    <div className="shop-main-option">
                      <SelectFilter
                        params={params}
                        handleClickFilter={handleClickFilter}
                      />
                      <div className="sidebar-filter-mobile">
                        <Button
                          type="primary"
                          size="small"
                          ghost
                          onClick={openFilterMobile}
                        >
                          <Icon icon="fa-solid:angle-left" />
                          filter
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="shop-main-list">
                    <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
                      {productList.map((item) => (
                        <div className="col" key={item._id}>
                          <ProductCard id={item._id} data={item} />
                        </div>
                      ))}
                    </div>
                    {pageParam.totalPage > 1 && (
                      <Pagination
                        data={productList.length}
                        currentPage={pageIndex || 1}
                        pageCount={Math.ceil(pageParam.totalPage)}
                      ></Pagination>
                    )}
                  </div>
                </>
              ) : (
                <div className="shop-main-list--notfound">
                  No products were found matching your selection.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="section-shop__sidebar--mobile">
        <div className="filter-mobile__button">
          <Button type="primary" ghost size="small" onClick={openFilterMobile}>
            x
          </Button>
        </div>
      </div>
    </>
  )
}

export default Product
