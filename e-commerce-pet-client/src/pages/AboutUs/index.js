import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import images from '../../assets'
import OurServices from '../../pages/Home/OurServices'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

//uppercase snakecase

const AboutUs = () => {
    const servicesData = [
        {
            image: images.services5,
            title: 'Free US Delivery',
            description: 'with No Minimum Spend',
        },
        {
            image: images.services6,
            title: 'Same Day Despatch',
            description: 'before 4 PM',
        },
        {
            image: images.services7,
            title: '94% Customer Service',
            description: 'Satisfaction Rating',
        },
        {
            image: images.services8,
            title: 'Sales Line',
            description: '+123 488 9652',
        },
    ]
    return (
        <>
            <div className="about" style={{ width: '100%' }}>
                <header className="about__header">
                    <Breadcrumb
                        className="about__header--breadcrumb"
                        targetFormat="snake"
                        style={{ color: 'white' }}
                    />
                    <h1 className="about__header--title">About Us</h1>
                </header>
                <section className="about__container mx-auto">
                    <div className="about__container--wrapper">
                        <div className="about__heading">
                            <h2>Our Mission</h2>
                        </div>
                        <section
                            className="about__container"
                            style={{ margin: 0 }}
                        >
                            <div className="about__container--wrapper">
                                <div className="about__container--item">
                                    <p>
                                        Rutrum ut bibendum sit est pharetra
                                        vitae massa. Pulvinar lobortis in
                                        aliquet faucibus. Faucibus eu hendrerit
                                        tristique hendrerit posuere odio lacinia
                                        nisl. Pretium enim vitae aliquet et
                                        egestas habitant habitant enim a. Est
                                        feugiat mauris id integer porta. Non
                                        quisque at phasellus scelerisque et
                                        dolor.
                                    </p>
                                </div>
                                <div className="about__container--item">
                                    <p>
                                        Nullam leo in ultrices purus amet
                                        pharetra nisi cursus quam. Nulla feugiat
                                        dapibus risus ac. Sit pretium a mattis
                                        viverra amet interdum etiam egestas
                                        suspendisse. Commodo venenatis sed
                                        pulvinar vitae dui. Enim metus morbi
                                        ornare odio quis integer.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
                <section className="about__container  mx-auto">
                    <div className="about__container--wrapper">
                        <div className="about__container--item">
                            <img
                                alt=""
                                src={images.about1}
                                loading="lazy"
                                className="about__container--item-img"
                            />
                        </div>
                        <div className="about__container--item about__overlay">
                            <div className="about__overlay--seo"></div>
                            <div className="about__heading">
                                <h2>From CEO</h2>
                            </div>
                            <p>
                                Welcome vitae in tristique sit purus massa
                                morbi. Tristique neque eleifend proin pulvinar
                                lectus leo magna scelerisque. Cursus at feugiat
                                at nulla. Malesuada et proin euismod scelerisque
                                auctor purus faucibus senectus. Interdum est
                                vulputate dui non et, semper amet. Ornare
                                aliquet in ut id rhoncus. Condimentum rhoncus at
                                eget donec. Massa luctus vitae id duis morbi
                                cursus libero hac ullamcorper.
                            </p>
                            <div>
                                <h2 className="about__container--item-sign">
                                    Julia Johnson
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about__container  mx-auto">
                    <div className="about__container--wrapper">
                        <div className="about__container--item about__overlay">
                            <div className="about__overlay--ourshop"></div>
                            <div className="about__heading">
                                <h2>Our Shop</h2>
                            </div>
                            <p style={{ paddingBottom: 20 }}>
                                Nullam leo in ultrices purus amet pharetra nisi
                                cursus quam. Nulla feugiat dapibus risus ac. Sit
                                pretium a mattis viverra amet interdum etiam
                                egestas suspendisse. Commodo venenatis sed
                                pulvinar vitae dui. Enim metus morbi ornare odio
                                quis integer.
                            </p>
                            <p>
                                Rutrum ut bibendum sit est pharetra vitae massa.
                                Pulvinar lobortis in aliquet faucibus. Faucibus
                                eu hendrerit tristique hendrerit posuere odio
                                lacinia nisl. Pretium enim vitae aliquet et
                                egestas habitant habitant enim a. Est feugiat
                                mauris id integer porta.
                            </p>
                        </div>
                        <div
                            style={{ paddingLeft: 60 }}
                            className="about__container--item"
                        >
                            <img
                                alt=""
                                src={images.about5}
                                loading="lazy"
                                className="about__container--item-img"
                            />
                        </div>
                    </div>
                </section>
                <section className="about__container  mx-auto">
                    <div className="about__container--wrapper">
                        <div className="about__container--service">
                            {servicesData.map((service, index) => (
                                <div
                                    className="about__container--service-item"
                                    key={index}
                                >
                                    <div className="about__container--service-img">
                                        <img
                                            className="img-fluid"
                                            src={service.image}
                                            alt=""
                                        />
                                    </div>
                                    <div className="about__container--service-content">
                                        <div>{service.title}</div>
                                        <div>{service.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <OurServices />
                <section className="about__instagram">
                    <div className="about__instagram--wrapper">
                        <div className="about__instagram--wrapper-item">
                            <img
                                className="img-fluid"
                                src={images.about6}
                                alt=""
                                loading="lazy"
                            />
                        </div>
                        <div className="about__instagram--wrapper-item">
                            <img
                                className="img-fluid"
                                src={images.about7}
                                alt=""
                                loading="lazy"
                            />
                        </div>
                        <div className="about__instagram--wrapper-item">
                            <img
                                className="img-fluid"
                                src={images.about8}
                                alt=""
                                loading="lazy"
                            />
                        </div>
                        <div className="about__instagram--wrapper-item">
                            <img
                                className="img-fluid"
                                src={images.about9}
                                alt=""
                                loading="lazy"
                            />
                        </div>
                        <div className="about__instagram--wrapper-item">
                            <img
                                className="img-fluid"
                                src={images.about10}
                                alt=""
                                loading="lazy"
                            />
                        </div>
                        <div className="about__instagram--wrapper-item">
                            <img
                                className="img-fluid"
                                src={images.about11}
                                alt=""
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div className="about__instagram--info">
                        <Icon
                            width={26}
                            height={26}
                            color="#73BE2F"
                            icon="fe:instagram"
                        />
                        <Link>ricky_shop</Link>
                    </div>
                </section>
            </div>
        </>
    )
}

export default AboutUs
