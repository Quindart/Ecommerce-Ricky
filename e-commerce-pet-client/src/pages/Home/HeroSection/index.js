import React, { useEffect, useMemo, useRef, useState } from 'react'
import Button from '../../../components/Button'
import images from '../../../assets'

const HeroSection = () => {
  const heroData = [
    {
      imagesDesktop: images.hero1,
      imagesTablet: images.heroTablet1,
      imagesMobile: images.heroMobile1,
      title: 'Amazing Toys for Puppy',
      subtitle: 'Funny & Interesting',
    },
    {
      imagesDesktop: images.hero2,
      imagesTablet: images.heroTablet2,
      imagesMobile: images.heroMobile2,
      title: 'Delicious Pet Food',
      subtitle: 'For Dogs and Cats',
    },
  ]

  // kích thước vòng
  const sizeCircle = 20
  // Viền
  const strokeWidth = 3
  //3 giây khi click
  const timeDelayByClick = 3 * 1000
  //3 giây progress
  const timeDelay = (3 / 100) * 1000
  //Data slider

  const [indexActive, setIndexActive] = useState(0)
  const [indexProgress, setIndexProgress] = useState(0)
  const [stopSlider, setStopSlider] = useState(false)
  const inTerval = useRef(null)
  const inTervalProgress = useRef(null)

  const cr = useMemo(() => sizeCircle / 3, [])
  const cxcy = useMemo(() => sizeCircle / 2, [])
  const strokeDash = useMemo(() => cr * 3.14 * 2, [cr])
  const result_DashOffset = useMemo(
    () => (percent) => (percent / 100) * strokeDash,
    [strokeDash]
  )

  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  useEffect(() => {
    const funcStopSlider = async () => {
      await delay(timeDelayByClick)
      setStopSlider(false)
    }

    let progressIntervalId

    if (!stopSlider) {
      clearInterval(inTerval.current)
      clearInterval(inTervalProgress.current)

      progressIntervalId = setInterval(() => {
        if (indexProgress <= 100) {
          setIndexProgress(indexProgress + 1)
        } else {
          setIndexActive((prevIndex) =>
            prevIndex >= heroData.length - 1 ? 0 : prevIndex + 1
          )
          setIndexProgress(0)
        }
      }, timeDelay)

      // Update the ref with the current interval ID
      inTervalProgress.current = progressIntervalId
    } else {
      progressIntervalId = setInterval(() => {
        if (indexProgress <= 100) {
          setIndexProgress(indexProgress + 1)
        } else {
          funcStopSlider()
        }
      }, timeDelay)

      // Update the ref with the current interval ID
      inTervalProgress.current = progressIntervalId
    }

    // Cleanup function
    return () => {
      if (inTervalProgress.current) {
        clearInterval(inTervalProgress.current)
      }
    }
  }, [
    indexActive,
    stopSlider,
    indexProgress,
    heroData.length,
    timeDelay,
    timeDelayByClick,
  ])

  return (
    <>
      <section style={{ width: '100%' }}>
        <div className="hero">
          {heroData &&
            heroData.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`hero__banner ${
                    indexActive === index ? 'active' : ''
                  }`}
                >
                  <img
                    src={
                      window.innerWidth > 1189
                        ? item.imagesDesktop
                        : window.innerWidth > 767
                          ? item.imagesTablet
                          : item.imagesMobile
                    }
                    alt=""
                    className="hero__banner--img"
                  />
                  <div className={`hero__container mx-auto `}>
                    <div className="hero__container--wrapper">
                      <div className="hero__title">
                        <span className="">{item.title}</span>
                      </div>
                      <div className="hero__subtitle">
                        <div className="hero__subtitle--outer">
                          <svg
                            className="hero__subtitle--outer-decor"
                            viewBox="0 0 238 45"
                            preserveAspectRatio="none"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity=".3"
                              d="M112.814 7.013c119.175-2.743 174.059 25.373 66.644 34.288C72.043 50.216-58.429 36.19 30.489 11.814 83.02-2.587 165.345.842 184.947 2.899"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            ></path>
                          </svg>
                          <span className="hero__subtitle--outer-inner">
                            {item.subtitle}
                          </span>
                        </div>
                      </div>
                      <Button
                        htmlType="link"
                        type="primary"
                        url="/"
                        color="green"
                        className="hero__btn"
                      >
                        Read more
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          {/* DOTS */}
          <div className="hero__dots">
            {heroData &&
              heroData.map((item, index) => {
                const activeSlider = indexActive === index

                const percentProgress = activeSlider ? indexProgress : 0
                return (
                  <>
                    <div
                      key={index}
                      className="banner__dot"
                      style={{
                        width: sizeCircle,
                        height: sizeCircle,
                      }}
                    >
                      <svg
                        onClick={() => {
                          setIndexActive(index)
                          setStopSlider(true)
                          setIndexProgress(0)
                        }}
                        style={{
                          transform: 'rotate(-90deg)',
                        }}
                        class="percent"
                        width={sizeCircle}
                        height={sizeCircle}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx={cxcy}
                          cy={cxcy}
                          r={cr}
                          fill="transparent"
                          stroke="#9ad0e3"
                          strokeWidth={strokeWidth}
                          strokeLinecap="round"
                        />
                        {activeSlider && (
                          <circle
                            id="customCircle"
                            strokeLinecap="round"
                            style={{
                              strokeDasharray: `${strokeDash} ${strokeDash}`,
                              strokeDashoffset: `
                                                   ${-result_DashOffset(
                                                     percentProgress
                                                   )}`,
                            }}
                            cx={cxcy}
                            cy={cxcy}
                            r={cr}
                            fill="transparent"
                            stroke="#0052B1"
                            strokeWidth={strokeWidth}
                          />
                        )}
                      </svg>
                    </div>
                  </>
                )
              })}
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
