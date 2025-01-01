import { Link, useNavigate } from 'react-router-dom'
import demo1 from '../../../assets/img/demo_news_1.jpg'
import demo2 from '../../../assets/img/demo_news_2.jpg'
import demo3 from '../../../assets/img/demo_news_3.jpg'
import demo4 from '../../../assets/img/demo_news_4.jpg'
import demo5 from '../../../assets/img/demo_news_5.jpg'
import SwiperComponent from '../../../components/Swiper'
import { SwiperSlide } from 'swiper/react'
import Button from '../../../components/Button'

const OurNews = () => {
  const navigate = useNavigate()
  const blogs = [
    {
      id: 1,
      title: 'New Trends in Pets Industry in 2023',
      userWriter: 1,
      content:
        'Adipiscing adipiscing non, vitae vel ullamcorper lorem massa elit libero. Eu ut egestas vel neque ut eget quis. Iaculis in amet cum molestie. Ut congue quis proin eleifend. Et a quam ac amet, cursus. Nunc posuere venenatis amet eu massa. Turpis enim consectetur orci mauris dolor. Nunc lorem ultrices tristique facilisis. Aenean elit sit consequat tortor ipsum in.',
      rating: 5,
      listReviews: [],
      dateCreated: 'November 29, 2022',
      imageLink: demo1,
    },
    {
      id: 2,
      title: 'Our New Hotel for Your Dogs',
      userWriter: 1,
      content:
        'Adipiscing adipiscing non, vitae vel ullamcorper lorem massa elit libero. Eu ut egestas vel neque ut eget quis. Iaculis in amet cum molestie. Ut congue quis proin eleifend. Et a quam ac amet, cursus. Nunc posuere venenatis amet eu massa. Turpis enim consectetur orci mauris dolor. Nunc lorem ultrices tristique facilisis. Aenean elit sit consequat tortor ipsum in.',
      rating: 5,
      listReviews: [],
      dateCreated: 'November 29, 2022',
      imageLink: demo2,
    },
    {
      id: 3,
      title: 'We Sell New Birds from South Africa',
      userWriter: 1,
      content:
        'Adipiscing adipiscing non, vitae vel ullamcorper lorem massa elit libero. Eu ut egestas vel neque ut eget quis. Iaculis in amet cum molestie. Ut congue quis proin eleifend. Et a quam ac amet, cursus. Nunc posuere venenatis amet eu massa. Turpis enim consectetur orci mauris dolor. Nunc lorem ultrices tristique facilisis. Aenean elit sit consequat tortor ipsum in.',
      rating: 5,
      listReviews: [],
      dateCreated: 'November 29, 2022',
      imageLink: demo3,
    },
    {
      id: 4,
      title: 'New Care Services for Small Pets',
      userWriter: 1,
      content:
        'Adipiscing adipiscing non, vitae vel ullamcorper lorem massa elit libero. Eu ut egestas vel neque ut eget quis. Iaculis in amet cum molestie. Ut congue quis proin eleifend. Et a quam ac amet, cursus. Nunc posuere venenatis amet eu massa. Turpis enim consectetur orci mauris dolor. Nunc lorem ultrices tristique facilisis. Aenean elit sit consequat tortor ipsum in.',
      rating: 5,
      listReviews: [],
      dateCreated: 'November 29, 2022',
      imageLink: demo4,
    },
    {
      id: 5,
      title: 'Our Video Presentation',
      userWriter: 1,
      content:
        'Adipiscing adipiscing non, vitae vel ullamcorper lorem massa elit libero. Eu ut egestas vel neque ut eget quis. Iaculis in amet cum molestie. Ut congue quis proin eleifend. Et a quam ac amet, cursus. Nunc posuere venenatis amet eu massa. Turpis enim consectetur orci mauris dolor. Nunc lorem ultrices tristique facilisis. Aenean elit sit consequat tortor ipsum in.',
      rating: 5,
      listReviews: [],
      dateCreated: 'November 29, 2022',
      imageLink: demo5,
    },
  ]
  return (
    <>
      <div className="section-news">
        <div className="section__header">
          <h2>Our News</h2>
        </div>
        <div className="container--default">
          <SwiperComponent
            classNamePrev="prevOurNews"
            classNameNext="nextOurNews"
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
                spaceBetween: 20,
              },
              930: {
                slidesPerView: 3,
                spaceBetween: 20,
                pagination: {
                  el: '.hidden',
                  clickable: true,
                },
              },
              1190: {
                slidesPerView: 4,
                spaceBetween: 20,
                pagination: {
                  el: '.hidden',
                  clickable: true,
                },
              },
            }}
          >
            {blogs.map((item) => (
              <SwiperSlide>
                <div
                  onClick={navigate('/undeveloped')}
                  className="section-news__card"
                >
                  <Link className="section-news__card-link" to="/">
                    <img src={item.imageLink} alt={item.title} />
                  </Link>
                  <div className="section-news__card-content">
                    <div className="section-news__card-date">
                      {item.dateCreated}
                    </div>
                    <div className="section-news__card-title">
                      <Link>{item.title}</Link>
                    </div>
                    <div className="section-news__card-subtitle">
                      {item.content}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </div>
        <div style={{ textAlign: 'center', paddingTop: '52px' }}>
          <Button htmlType="link" type="primary" url="/" size="medium">
            view all
          </Button>
        </div>
      </div>
    </>
  )
}
export default OurNews
