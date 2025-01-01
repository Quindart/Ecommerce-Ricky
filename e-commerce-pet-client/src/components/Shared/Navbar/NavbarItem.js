import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../Loading'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import Button from '../../Button'
import { fetchCategoryTree } from '../../../store/categorySlice'
import { useSnackbar } from 'notistack'
import { ListIconNavbar } from '../../../utils/Icon'

const NavbarItem = () => {
  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useDispatch()
  const { loading, categoryTree, error, loaded } = useSelector(
    (state) => state?.categories
  )

  useEffect(() => {
    if (!loaded) {
      dispatch(fetchCategoryTree())
    }
    if (error) {
      enqueueSnackbar(error, {
        variant: 'error',
      })
    }
  }, [dispatch, loaded, error, enqueueSnackbar])

  if (loading) {
    return <Loading />
  }

  return (
    <nav>
      <ul className="top-menu__list--header">
        <li className="top-menu__item--header">
          <span>
            <Icon
              className="top-menu__item--header-icon"
              icon='solar:shop-bold'
            />
            <Link
              to={"shop"}
            >
              shop
            </Link>
          </span>
        </li>
        {categoryTree &&
          categoryTree?.tree?.map((tree, index) => (
            <li className="top-menu__item--header" key={index}>
              <span>
                <Icon
                  className="top-menu__item--header-icon"
                  icon={ListIconNavbar[index % ListIconNavbar.length].icon}
                />
                {tree.name}
              </span>
              {tree?.name === 'dog' ? (
                <div
                  style={{ left: '-279px' }}
                  className={`${tree.name === 'dog' ? 'large--menu' : ''}`}
                >
                  <div className="large--container">
                    <div className="large--left">
                      <div className="large--title">Dogs</div>
                      <ul className="menu--submenu-large">
                        {tree?.child?.map((subItem) => (
                          <li key={subItem._id} className="submenu--item">
                            <Link
                              to={`shop?offset=${1}&limit=${10}&searchType=name&keywords=${subItem?.name.replace(
                                /\s/g,
                                ''
                              )}`}
                              className="submenu--item-link"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="large--center"></div>
                    <div className="large--right">
                      <div className="widget--wrap">
                        <div className="widget--heading">
                          <h2>
                            Amazing <br />
                            Pet Toys
                          </h2>
                        </div>
                        <div className="widget--heading-title">
                          <h2>Funny Toys</h2>
                        </div>
                        <Link>
                          <Button
                            htmlType="link"
                            type="primary"
                            url="/"
                            color="white"
                            className="btn--link"
                          >
                            SHOP NOW
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <ul className="top-menu__submenu">
                  {tree?.child?.map((subItem) => (
                    <li key={subItem?._id} className="submenu--item">
                      <Link
                        to={`product-category/${subItem?._id}`}
                        className="submenu--item-link"
                      >
                        {subItem?.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default NavbarItem
