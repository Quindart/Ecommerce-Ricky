import { Outlet } from 'react-router-dom'
import Footer from '../../components/Shared/Footer'
import Navbar from '../../components/Shared/Navbar'
import MainBar from '../../components/Shared/Navbar/HeaderBar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoryTree } from '../../store/categorySlice'
import ScrollToTop from '../../components/Shared/ScrollToTop'
import { getAllCartItems } from 'store/slice/cartSlice'
import Modal from 'components/Modal'
import { closeModal } from 'store/slice/modalSlice'
import ProductQuickview from 'components/Product/ProductQuickview'

function MainLayout() {
  const dispatch = useDispatch()
  const {isModalOpen, dataModal} = useSelector((state) => state.modal)

  useEffect(() => {
    dispatch(getAllCartItems())
    dispatch(fetchCategoryTree())
  }, [dispatch])

  const handleCloseModal = () => {
    dispatch(closeModal())
  }

  return (
    <main
      style={{
        maxWidth: '100vw',
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <Navbar />
      <MainBar />
      <Outlet />
      <ScrollToTop />
      <Footer />
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <ProductQuickview data={dataModal} />
      </Modal>
    </main>
  )
}

export default MainLayout
