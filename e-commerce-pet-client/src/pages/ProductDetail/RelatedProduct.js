import React from 'react'
import ProductCard from '../../components/ProductCard'
import { useFetchTopProductByPrams } from '../../hooks/useProduct'
import { SwiperSlide } from 'swiper/react'
import SwiperComponent from '../../components/Swiper'
const RelatedProduct = () => {
  const products = useFetchTopProductByPrams(1, 6)

  return (
    <>
      <section className="section__related__product">
        <div className="section__header">
          <h2>Related Product</h2>
        </div>
        <div className="container--default">
          <SwiperComponent
            classNamePrev="prevTopProducts"
            classNameNext="nextTopProducts"
            type="product"
            slidesPerView={5}
            className="cc"
            breakpoints={{
              0: {
                slidesPerView: 1,
                pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
                },
              },

              360: {
                slidesPerView: 2,
                spaceBetween: 0,
              },

              756: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 0,
                pagination: {
                  el: '.hidden',
                  clickable: true,
                },
              },
              1190: {
                slidesPerView: 5,
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
      </section>
    </>
  )
}

export default RelatedProduct
