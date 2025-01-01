import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
const useModal = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '') {
      setModalOpen(false)
    }
  }, [location.pathname])

  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(!isModalOpen)
  }

  return {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
  }
}

export default useModal
