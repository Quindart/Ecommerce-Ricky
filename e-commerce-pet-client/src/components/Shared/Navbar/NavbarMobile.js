import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListIconNavbar } from '../../../utils/Icon'
import { MenuItems } from '../../../utils/MenuItem'
import Modal from '../../Modal'
import useModal from '../../../hooks/useModal'
import Search from '../../Search'
import { useCart } from 'hooks/useCart'

const NavbarMobile = ({ className, onClose }) => {
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal()
  const { cart_details } = useCart.GetCartByUserId()

  const [step, setStep] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedMenu, setSelectedMenu] = useState(null)
  const { categoryTree } = useSelector((state) => state?.categories)
  const user = useSelector((state) => state?.auth?.user?.user)

  const handleClickStep = () => {
    setStep(!step)
  }

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu)
    setSelectedCategory(null) // Reset selected category
    setStep(true)
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
    setSelectedMenu(null) // Reset selected menu
    setStep(true)
  }

  return (
    <div className={`navbar__mobile ${className}`}>
      <Modal open={isModalOpen} onClose={handleCloseModal} full>
        <Search />
      </Modal>
      <div className="navbar__mobile-shadow"></div>
      <div className="navbar__mobile-btn">
        <button
          className={`navbar__mobile-btn-back h-cb ${step ? 'active' : ''}`}
          onClick={handleClickStep}
        >
          <Icon icon="ion:chevron-back-outline" vFlip={true} color="white" />
          <span>BACK</span>
        </button>
        <button className="navbar__mobile-btn-close h-cb" onClick={onClose}>
          <Icon icon="mingcute:close-fill" />
        </button>
      </div>
      <div className="navbar__mobile-content">
        <div className={`navbar__mobile-wrap ${step ? 'page-1' : ''}`}>
          <div className={`navbar__mobile-page`}>
            {/* Category level 1 */}

            <ul className="navbar__mobile-list">
              {categoryTree &&
                categoryTree?.tree?.map((tree, index) => (
                  <li key={index}>
                    <Link
                      className="navbar__mobile-item"
                      onClick={() => handleCategoryClick(tree)}
                    >
                      <Icon
                        className="navbar__mobile-item-icon-left"
                        icon={
                          ListIconNavbar[index % ListIconNavbar.length].icon
                        }
                      />
                      {tree.name}
                      <Icon
                        className="navbar__mobile-item-icon-right"
                        icon={'mingcute:right-fill'}
                      />
                    </Link>
                  </li>
                ))}
            </ul>

            {/* Menu Level 1 */}

            <ul className="navbar__mobile-list">
              {MenuItems?.map((menuItem, index) => (
                <li onClick={() => handleMenuClick(menuItem)} key={index}>
                  <Link className="navbar__mobile-item">
                    {menuItem.label}
                    <Icon
                      className="navbar__mobile-item-icon-right"
                      icon={'mingcute:right-fill'}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Category level 2 */}

          {step && selectedCategory && (
            <div className={`navbar__mobile-page`}>
              <ul className="navbar__mobile-list">
                <li>
                  <Link className="navbar__mobile-item parent">
                    {selectedCategory?.name}
                  </Link>
                </li>
                {selectedCategory?.child?.map((subItem) => (
                  <li key={subItem._id}>
                    <Link
                      to={subItem.path}
                      className="navbar__mobile-item"
                      onClick={onClose}
                    >
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* Menu Level 2 */}

          {step && selectedMenu && (
            <div className={`navbar__mobile-page`}>
              <ul className="navbar__mobile-list">
                <li>
                  <Link className="navbar__mobile-item parent">
                    {selectedMenu?.label}
                  </Link>
                </li>
                {selectedMenu?.subMenu?.map((subItem, subIndex) => (
                  <li onClick={() => handleMenuClick(subItem)} key={subIndex}>
                    <Link to={subItem?.link} className="navbar__mobile-item">
                      {subItem?.label}
                      <Icon
                        className="navbar__mobile-item-icon-right"
                        icon={'mingcute:right-fill'}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="navbar__mobile-bottom">
        <div className="header__search-button header__button-link">
          <span onClick={handleOpenModal}>
            <Icon icon="iconamoon:search-bold" />
          </span>
        </div>
        <div className="header__auth-button header__button-link">
          <Link to={`${user ? 'my_account' : 'login'}`} onClick={onClose}>
            <Icon icon="ph:user-bold" />
          </Link>
        </div>
        <div className="header__wishlist-button header__button-link">
          <Link onClick={onClose}>
            <Icon icon="iconamoon:heart-bold" />
            {/* <span className="navbar__mobile-count">99</span> */}
          </Link>
        </div>
        <div className="header__cart-button header__button-link">
          <Link to={`cart`} onClick={onClose}>
            <Icon icon="pepicons-pop:cart" />
            <span className="navbar__mobile-count">
              {cart_details && cart_details !== 0 ? cart_details?.length : null}
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default React.memo(NavbarMobile)
