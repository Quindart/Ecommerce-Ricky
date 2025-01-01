import React from 'react'
import SwiperComponent from '../../components/Swiper'
import { SwiperSlide } from 'swiper/react'
import images from '../../assets'
// import SwiperComponent from '../../components/Swiper_testimonials/index.js'

const dataTestimonials = [
    {
        id: 1,
        text: 'Food too own civil out along. Perfectly offending attempted add arranging age.',
        name: 'Mike Johnson',
        avt: images.reviewerAvt1,
    },
    {
        id: 2,
        text: 'Food too own civil out along. Perfectly offending attempted add arranging age.',
        name: 'Mike Johnson',
        avt: images.reviewerAvt1,
    },
    {
        id: 3,
        text: 'Food too own civil out along. Perfectly offending attempted add arranging age.',
        name: 'Mike Johnson',
        avt: images.reviewerAvt1,
    },
    {
        id: 4,
        text: 'Food too own civil out along. Perfectly offending attempted add arranging age.',
        name: 'Mike Johnson',
        avt: images.reviewerAvt1,
    },
]

const Testimonials = () => {
    return (
        <section style={{ width: '100%' }}>
            <div className="testimonials">
                <div className="testimonials__container mx-auto">
                    <div className="testimonials__container--wrapper">
                        <div className="testimonials__title">
                            <h2>Testimonials</h2>
                        </div>
                        <div className="testimonials__slider mx-auto">
                            <SwiperComponent
                                classNamePrev="prevTestimonials"
                                classNameNext="nextTestimonials"
                                slidesPerView={3}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                    },

                                    640: {
                                        slidesPerView: 1,
                                        pagination: {
                                            el: '.none',
                                            clickable: false,
                                        },
                                    },

                                    768: {
                                        slidesPerView: 2,
                                    },
                                    992: {
                                        slidesPerView: 2,
                                    },
                                    1179: {
                                        slidesPerView: 3,
                                        spaceBetween: 0,
                                        pagination: {
                                            el: '.hidden',
                                            clickable: true,
                                        },
                                    },
                                }}
                            >
                                {dataTestimonials.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="testimonials__slider--items">
                                            <div>
                                                <div className="testimonials__slider--items-text">
                                                    {item.text}
                                                </div>
                                                <div className="testimonials__slider--items-info">
                                                    <img
                                                        src={item.avt}
                                                        alt=""
                                                    />
                                                    {item.name}
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </SwiperComponent>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
