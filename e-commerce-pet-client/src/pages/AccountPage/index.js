import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useDispatch } from 'react-redux'
import { reset } from '../../store/auth/authSlice'
import { useSnackbar } from 'notistack'
import { useAuth } from 'hooks/useAuth'

const categoryAccount = [
  {
    title: 'dashboard',
    text: '',
    type: 'dashboard',
    path: 'dashboard',
  },
  {
    title: 'orders',
    text: '',
    type: 'orders',
    path: 'orders',
  },
  {
    title: 'address',
    text: '',
    type: 'address',
    path: 'address',
  },
  {
    title: 'account details',
    text: '',
    path: 'edit_account',
    type: 'accountDetails',
  },
  {
    title: 'log out',
    text: '',
    type: 'log_out',
    path: 'log_out',
  },
]

const AccountPage = () => {
  const location = useLocation()
  const path = location.pathname.split('/')
  const title = path[path.length - 1].split('_').join(' ')
  const user = useAuth.useUser()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  const handleLogout = () => {
    // navigate('/login')
    dispatch(reset())
    dispatch(useAuth.logout())
    enqueueSnackbar('You have been logged out successfully!', {
      variant: 'success',
    })
    window.location.href = "/login";
  }

  return (
    <div className="account">
      <header className="account__header">
        <Breadcrumb
          className="account__header--breadcrumb"
          targetFormat="snake"
        />
        <h1
          style={{ textTransform: 'capitalize' }}
          className="account__header--title mx-auto"
        >
          {title}
        </h1>
      </header>
      <section className="account__container mx-auto">
        <div className="account__wrapper">
          <div className="account__content">
            <div className="account__content--left">
              <div className="account__content--user">
                <div className="account__content--user-avatar">
                  <img
                    className="img-fluid"
                    src={`${
                      user?.avatar?.url ||
                      'https://secure.gravatar.com/avatar/b85c767a491da7a9a87164ab6c88af02?s=70&d=mm&r=g'
                    }`}
                    alt=""
                  />
                </div>
                <div className="account__content--user-text">
                  Hello,
                  <div className="account__content--user-name">
                    {user && user.userName}
                  </div>
                </div>
              </div>
              <nav>
                <ul className="account__content--navigation">
                  {categoryAccount.map((item) => (
                    <li key={item.title} style={{ lineHeight: 1 }}>
                      {item.type === 'log_out' ? (
                        <NavLink
                          onClick={handleLogout}
                          style={{ cursor: 'pointer' }}
                        >
                          <Icon
                            style={{
                              marginRight: 6,
                              color: '#F63E04',
                            }}
                            icon="material-symbols:logout-rounded"
                          />
                          {item.title}
                        </NavLink>
                      ) : (
                        <NavLink
                          className={({ isActive }) =>
                            [isActive ? 'active' : ''].join(' ')
                          }
                          to={item.path}
                        >
                          {item.title}
                        </NavLink>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="account__content--right">
              {/* <p>
                From your account dashboard you can view your
                <Link>recent orders</Link>, manage your
                <Link>shipping and billing addresses</Link>, and
                <Link>edit your password and account details</Link>.
              </p> */}
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AccountPage
