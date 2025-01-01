import React from 'react'
import images from '../../assets'
import Button from '../../components/Button'
import { Icon } from '@iconify/react'

const Populated = () => {
    return (
        <section>
            <div className="populated">
                <div className="populated__container mx-auto">
                    <div className="populated__container--wrapper">
                        <section className="populated__container--wrapper-content">
                            <div className="populated__container--wrapper-content-item">
                                <img
                                    src={images.populatedBackground}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="populated__container--wrapper-content-item">
                                <div className="populated__title">
                                    <h2>Health Services</h2>
                                </div>
                                <div
                                    className="populated__description"
                                    style={{ marginBottom: 25 }}
                                >
                                    <p>
                                        Amet a scelerisque sed tortor
                                        suspendisse tristique fames tempor. Sit
                                        feugiat sodales nisl ut in risus ut
                                        lectus. Mus adipiscing id tincidunt
                                        aliquet tempor urna bibendum sapien.
                                        Fringilla purus feugiat dignissim aenean
                                        placerat risus mi.
                                    </p>
                                    <div className="populated__icon">
                                        <img src={images.populated1} alt="" />
                                    </div>
                                </div>
                                <div
                                    style={{ marginBottom: 35 }}
                                    className="populated__description"
                                >
                                    <p>
                                        Egestas arcu elit proin nec non enim.
                                        Varius volutpat eu pellentesque facilisi
                                        amet pharetra tortor. Congue ullamcorper
                                        fringilla platea viverra lorem
                                        adipiscing. Enim auctor vestibulum
                                        tempor in ultrices etiam ut donec.
                                        Lectus aliquam.
                                    </p>
                                    <div className="populated__icon">
                                        <img src={images.populated2} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <Button
                                        htmlType="link"
                                        type="primary"
                                        url="/"
                                    >
                                        <span>
                                            <Icon icon="mdi:play" />
                                        </span>
                                        see on video
                                    </Button>
                                </div>
                            </div>
                        </section>

                        <div className="populated__images">
                            <img
                                alt=""
                                src={images.populatedBackground5}
                                loading="lazy"
                                className="populated__images--left"
                            />
                        </div>
                        <div className="populated__images">
                            <img
                                alt=""
                                src={images.populatedBackground6}
                                loading="lazy"
                                className="populated__images--right"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Populated
