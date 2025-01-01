import { SwiperSlide } from 'swiper/react'
import SwiperComponent from '../../../components/Swiper'
import ProductCard from '../../../components/ProductCard'
import { useFetchTopProductByPrams } from '../../../hooks/useProduct'

const DailySales = () => {
  const products = useFetchTopProductByPrams(3, 12)
  return (
    <>
      <div className="section-top-products">
        <div className="section__header">
          <h2>Daily Sales</h2>
        </div>
        <div className="container--default">
          <SwiperComponent
            classNamePrev="prevDailySale"
            classNameNext="nextDailySale"
            type="product"
            slidesPerView={5}
            breakpoints={{
              0: {
                slidesPerView: 1,
                pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
                },
              },

              640: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              930: {
                slidesPerView: 3,
                spaceBetween: 0,
                pagination: {
                  el: '.hidden',
                  clickable: true,
                },
              },
              1190: {
                slidesPerView: 4,
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
                  <ProductCard data={item} sale />
                </SwiperSlide>
              ))}
          </SwiperComponent>
        </div>
      </div>
    </>
  )
}
export default DailySales
