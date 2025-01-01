import React, { useState } from 'react'
import Tab from '../../../components/Tab'
import SwiperComponent from '../../../components/Swiper'
import { SwiperSlide } from 'swiper/react'

import ProductCard from '../../../components/ProductCard'
import images from '../../../assets'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useFetchProductByTagName } from '../../../hooks/useProduct'
// TAB

const tabData = [
  {
    id: 1,
    tab: 'dog',
    path: 'dog',
    title: 'Dogs',
  },
  {
    id: 2,
    tab: 'cat',
    path: 'cat',
    title: 'Cats',
  },

  {
    id: 3,
    tab: 'fish',
    path: 'fish',
    title: 'Fish',
  },

  {
    id: 4,
    tab: 'Small Pets',
    path: 'small-pet',
    title: 'Small Pets',
  },
]

const listDataCategory = [
  {
    id: 1,
    title: 'Fresh & Frozen Food',
  },
  {
    id: 2,
    title: 'Toys',
  },
  {
    id: 3,
    title: 'beds',
  },
  {
    id: 4,
    title: 'clothes',
  },
  {
    id: 5,
    title: 'grooming',
  },
  {
    id: 6,
    title: 'trackers',
  },
]

const ProductTab = () => {
  // Tab
  const [currentTab, setCurrentTab] = useState('dog')
  const handleTabChange = (tab) => {
    setCurrentTab(tab)
  }

  // Tab

  const products = useFetchProductByTagName(1, 10, currentTab)

  return (
    <>
      <section style={{ width: '100%' }} id="product__tabs">
        <div className="productTabs">
          <div className="productTabs__container mx-auto">
            <div className="productTabs__wrapper">
              <Tab
                className="productTabs__wrapper--tabs mx-auto"
                data={tabData}
                onChangeTab={handleTabChange}
                currentTab={currentTab}
              />
              <div className="productTabs__list">
                <div className="productTabs__list--item">
                  <div className="productTabs__list--item-wide">
                    <div className="productTabs__list--item-wide-header">
                      <img
                        src={images.cateTabDogs}
                        alt=""
                        className="img-fluid"
                      />
                      <div className="productTabs__list--item-wide-title">
                        Dogs
                      </div>
                      <div className="productTabs__list--item-wide-view">
                        <Link>
                          view all
                          <Icon icon="pajamas:arrow-right" />
                        </Link>
                      </div>
                    </div>
                    <div className="productTabs__list--item-wide-subcate">
                      <ul>
                        {listDataCategory &&
                          listDataCategory.map((item, key) => (
                            <li key={key.id}>
                              <Link>{item.title}</Link>
                            </li>
                          ))}
                      </ul>
                      <div
                        style={{ marginTop: 30 }}
                        className="productTabs__list--item-wide-view"
                      >
                        <Link>
                          view all
                          <Icon icon="pajamas:arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="productTabs__list--item-columns">
                    <SwiperComponent
                      classNamePrev="prevProductTab"
                      classNameNext="nextProductTab"
                      slidesPerView={3}
                      grids={2}
                      type={`product--two-row`}
                      breakpoints={{
                        320: {
                          slidesPerView: 2,
                          spaceBetween: 0,
                          pagination: {
                            el: 'hidden',
                            clickable: true,
                          },
                        },

                        640: {
                          slidesPerView: 2,
                          spaceBetween: 0,
                          pagination: {
                            el: 'hidden',
                            clickable: true,
                          },
                        },

                        768: {
                          slidesPerView: 3,
                          spaceBetween: 0,
                          pagination: {
                            el: 'hidden',
                            clickable: true,
                          },
                        },
                        992: {
                          slidesPerView: 3,
                          spaceBetween: 0,
                          pagination: {
                            el: '.hidden',
                            clickable: true,
                          },
                        },
                      }}
                    >
                      {products &&
                        products.map((item) => (
                          <SwiperSlide>
                            <ProductCard data={item} />
                          </SwiperSlide>
                        ))}
                    </SwiperComponent>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductTab
