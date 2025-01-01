import React from 'react'
import images from '../../assets'

const ListImageBrand = [
  { id: 1, images: images.brand1 },
  { id: 2, images: images.brand2 },
  { id: 3, images: images.brand3 },
  { id: 4, images: images.brand4 },
  { id: 5, images: images.brand5 },
  { id: 6, images: images.brand6 },
]

const Brand = () => {
  return (
    <section className="brand">
      <div className="brand__container mx-auto">
        <div className="brand__wrapper">
          <div className="brand__list">
            {ListImageBrand?.map((item) => (
              <div key={item.id} className="brand__item">
                <img loading="lazy" src={item.images} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="brand__svg--right hide-on-mobile">
          <img className="img-fluid" src={images.brand7} alt="" />
        </div>
        <div className="brand__svg--left hide-on-mobile">
          <img className="img-fluid" src={images.brand8} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Brand
