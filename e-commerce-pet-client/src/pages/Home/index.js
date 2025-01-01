import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import OurServices from '../../pages/Home/OurServices'
import HeroSection from '../../pages/Home/HeroSection'
import ProductTab from './ProductTab'
import TopProducts from './TopProducts'
import DailySales from './DailySales'
import OurNews from './OurNews'
import Populated from './Populated'
import Testimonials from './Testimonials'
import Modal from '../../components/Modal'
import useModal from '../../hooks/useModal'
import { useForm } from 'react-hook-form'
import ProductQuickview from '../../components/Product/ProductQuickview'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/Button'
import MarqueeRunning from '../../components/MarqueeRunning'
import Brand from './Brand'

const data = {
  id: '1',
  name: 'American Journey Landmark Chicken',
  description:
    'Cats are natural carnivores, so they thrive on a diet that’s high in animal protein.',
  category: { name: 'Food' },
  brand: 'Whole Hearted',
  dimensions: { weight: 8 },
  available: 200,
  price: 20,
}

function Home() {
  const { showProductModal, handleProductModal } = useModal()
  const refQuantity = useRef(data.quantity || 0)

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm()

  const handleChangeQuantity = (quantity) => {
    refQuantity.current = Number(quantity)
    console.log(quantity)
  }

  return (
    <div>
      <HeroSection />
      <TopProducts data={data} />
      <MarqueeRunning />
      <ProductTab />
      <OurNews />
      <DailySales />
      <Populated />
      <OurServices id="widget__home" />
      <Testimonials />
      {/* <Modal
        showProductModal={showProductModal}
        handleProductModal={handleProductModal}
      >
        <ProductQuickview
          data={data}
          handleChangeQuantity={handleChangeQuantity}
          value={refQuantity.current}
          errors={errors}
          handleProductModal={handleProductModal}
        />
      </Modal> */}
      <Brand />
    </div>
  )
}

export default Home
