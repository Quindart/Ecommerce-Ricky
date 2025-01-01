import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import SwiperComponent from '../../components/Swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import Badge from '../../components/Badge'
import { Link, useParams } from 'react-router-dom'
import 'swiper/css/thumbs'
import 'swiper/css/navigation'
import 'swiper/css'
import { Navigation, Thumbs } from 'swiper/modules'
import Tab from '../../components/Tab'
import { apiGetProductById } from '../../services/api'
import ProductContext from '../../components/Product/ProductContext'
import Loading from '../../components/Loading'
import { useSnackbar } from 'notistack'

const TabData = [
  {
    id: 1,
    tab: 'Description',
  },
  {
    id: 2,
    tab: 'Additional information',
  },

  {
    id: 3,
    tab: 'Reviews (0)',
  },
]

const MainDetail = () => {
  const [activeThumb, setActiveThumb] = useState()
  const [detailProduct, setDetailProduct] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { product_id } = useParams()
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const result = await apiGetProductById(product_id)
        setDetailProduct(result.product)
        setIsLoading(false)
      } catch (error) {
        console.log()
        enqueueSnackbar(error.message, {
          variant: 'warning',
        })
        setIsLoading(false)
      }
    }
    fetchData()
  }, [enqueueSnackbar, product_id])

  return (
    <>
      {isLoading && <Loading />}
      <div className="detail">
        <header className="detail__header">
          <Breadcrumb
            className="detail__header--breadcrumb"
            targetFormat="snake"
          />
        </header>
        <section className="detail__container mx-auto">
          <div className="detail__container--wrapper">
            <div
              style={{ position: 'relative' }}
              className="detail__container--wrapper-item left"
            >
              <div className="badge__list">
                <Badge badges={'new'} message="new"></Badge>
              </div>
              <SwiperComponent
                thumbs={{ swiper: activeThumb }}
                classNamePrev="prevDetail"
                classNameNext="nextDetail"
                type="detail"
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    pagination: {
                      el: '.hidden',
                      clickable: true,
                    },
                  },

                  640: {
                    slidesPerView: 1,
                    pagination: {
                      el: '.hidden',
                      clickable: true,
                    },
                  },
                  pagination: {
                    el: '.hidden',
                    clickable: true,
                  },
                  992: {
                    slidesPerView: 1,
                  },
                  1179: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    pagination: {
                      el: '.hidden',
                      clickable: true,
                    },
                  },
                }}
              >
                {detailProduct?.images?.map((img) => (
                  <div className="detail__product">
                    <SwiperSlide key={img?._id}>
                      <img
                        src={img?.url}
                        alt=""
                        className="img-fluid detail__product-images"
                      />
                    </SwiperSlide>
                  </div>
                ))}
              </SwiperComponent>
              <Swiper
                onSwiper={setActiveThumb}
                loop={true}
                slidesPerView={2}
                spaceBetween={5}
                modules={[Thumbs, Navigation]}
                className="swiper__images-slider-thumbs"
              >
                {detailProduct?.images?.map((img) => (
                  <div className="">
                    <SwiperSlide key={img?._id}>
                      <div className="swiper__images-slider-thumbs-wrapper">
                        <img src={img?.url} alt="" className="img-fluid" />
                      </div>
                    </SwiperSlide>
                  </div>
                ))}
              </Swiper>
              <div>
                <div className="detail__meta">
                  <span className="detail__meta--link">
                    SKU: <span>{detailProduct?.code}</span>
                  </span>
                  <span className="detail__meta--link">
                    Category:
                    <Link>{detailProduct?.category?.description}</Link>
                  </span>
                  <span className="detail__meta--link">
                    Tags:{' '}
                    {detailProduct?.tags?.map((tag) => (
                      <Link>{tag}</Link>
                    ))}
                  </span>
                  <span className="detail__meta--link">
                    Brand: <Link>{detailProduct?.brand}</Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="detail__container--wrapper-item right">
              <ProductContext
                data={detailProduct && detailProduct}
                type="page"
              />
            </div>
          </div>
          <div className="detail__tab">
            <Tab className="detail__tab--wrapper" data={TabData}></Tab>
          </div>
        </section>
      </div>
    </>
  )
}

export default MainDetail
