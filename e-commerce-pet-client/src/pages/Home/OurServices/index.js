import React from 'react'

import { SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Button from '../../../components/Button'
import { Link } from 'react-router-dom'
import images from '../../../assets'
import SwiperComponent from '../../../components/Swiper'

const dataWidget = [
    {
        id: 1,
        path: '',
        title: 'Pets Grooming',
        description:
            'Maecenas nisi proin at in.Imperdiet nunc adipiscing eros, ut dolor consequat.Mattis diam tortor.',
        images: images.services1,
    },
    {
        id: 2,
        path: '',
        title: 'Training',
        description:
            'Maecenas nisi proin at in.Imperdiet nunc adipiscing eros, ut dolor consequat.Mattis diam tortor.',
        images: images.services2,
    },
    {
        id: 3,
        path: '',
        title: 'Pets Care',
        description:
            'Maecenas nisi proin at in.Imperdiet nunc adipiscing eros, ut dolor consequat.Mattis diam tortor.',
        images: images.services3,
    },
    {
        id: 4,
        path: '',
        title: 'Pet Hotel',
        description:
            'Maecenas nisi proin at in.Imperdiet nunc adipiscing eros, ut dolor consequat.Mattis diam tortor.',
        images: images.services4,
    },
]

const OurServices = (props) => {
    const { id, style, ...rest } = props
    return (
        <>
            <section id={id} className="widget" style={style} {...rest}>
                <div className="widget__container">
                    <div className="widget__wrapper">
                        {/* <div className="widget__heading">
                            <h2>Our Services</h2>
                        </div> */}
                        <SwiperComponent
                            classNamePrev="prevOurServices"
                            classNameNext="nextOurServices"
                            slidesPerView={3}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    pagination: {
                                        el: '.swiper-pagination',
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
                                    spaceBetween: 40,
                                    pagination: {
                                        el: '.hidden',
                                        clickable: true,
                                    },
                                },
                            }}
                        >
                            {dataWidget.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div style={{ width: 'auto' }}>
                                        <div className="widget__item">
                                            <div className="widget__item--img">
                                                <img
                                                    className="img-fluid"
                                                    loading="lazy"
                                                    src={item.images}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="widget__item--title">
                                                <Link className="services__link">
                                                    {item.title}
                                                </Link>
                                            </div>
                                            <div className="widget__item--description">
                                                {item.description}
                                            </div>
                                            <div className="widget__space"></div>
                                            <Button
                                                htmlType="submit"
                                                type="primary"
                                                size=""
                                                color="white"
                                                className="widget__item--btn"
                                            >
                                                Read more
                                            </Button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </SwiperComponent>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurServices
