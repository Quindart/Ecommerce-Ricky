import React, { useState } from 'react'
import { Grid, Navigation, Pagination, Autoplay, Thumbs } from 'swiper/modules'

import { Swiper } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/grid'
import 'swiper/css/autoplay'
import 'swiper/css/thumbs'
import { Icon } from '@iconify/react'

const SwiperComponent = (props) => {
  const {
    type,
    children,
    slidesPerView = 3,
    className,
    grids,
    classNameNext,
    classNamePrev,
    thumbs,
    breakpoints = {
      320: {
        slidesPerView: 1,
        pagination: {
          el: '.none',
          clickable: true,
        },
      },

      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 10,
        pagination: {
          el: '.hidden',
          clickable: true,
        },
      },
    },
    ...rest
  } = props

  const [mouseHover, setMouseHover] = useState(false)

  const classNameCustom =
    type !== undefined ? `swiper__wrap swiper__${type}` : `swiper__wrap`

  // if (!classNamePrev || !classNameNext) {
  //     return <></>
  // }

  const activeShowIcon = mouseHover === true
  return (
    <>
      <div
        onMouseMove={() => setMouseHover(true)}
        onMouseLeave={() => setMouseHover(false)}
        className={classNameCustom}
        {...rest}
      >
        <Swiper
          thumbs={thumbs}
          style={{ height: '100%' }}
          slidesPerView={slidesPerView}
          grid={{
            rows: grids,
            fill: 'row',
          }}
          navigation={{
            prevEl: '.' + classNamePrev,
            nextEl: '.' + classNameNext,
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
          modules={[Navigation, Pagination, Grid, Autoplay, Thumbs]}
          breakpoints={breakpoints}
        >
          {children}
        </Swiper>
        <div className="swiper__btns">
          <button
            type="button"
            role="presentation"
            style={{
              opacity: activeShowIcon ? 1 : 0,
              visibility: activeShowIcon ? 'visible' : 'hidden',
            }}
            className={`${classNamePrev} swiper__btn swiper__btn--left`}
          >
            <Icon width={24} height={24} icon="pajamas:arrow-left" />
          </button>

          <button
            type="button"
            role="presentation"
            style={{
              opacity: activeShowIcon ? 1 : 0,
              visibility: activeShowIcon ? 'visible' : 'hidden',
            }}
            className={`${classNameNext} swiper__btn swiper__btn--right`}
          >
            <Icon width={24} height={24} icon="pajamas:arrow-right" />
          </button>
        </div>
      </div>
    </>
  )
}

export default SwiperComponent
