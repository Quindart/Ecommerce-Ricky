import AboutUs from '../pages/AboutUs'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import NoMatch from '../pages/NoMatch'
import ProductDetail from '../pages/ProductDetail'
import TestComponents from '../pages/TestComponents'
import PrivateRoutes from './PrivateRoute'
import AuthLayout from '../Layout/AuthLayout'
import MainLayout from '../Layout/MainLayout'
import AccountPage from '../pages/AccountPage'
import EditAccount from '../pages/AccountPage/EditAccount'
import Product from '../pages/Product'
import CheckoutPage from '../pages/CheckoutPage'
import Undeveloped from '../pages/Undeveloped'
import PaymentSuccess from '../pages/PaymentSuccess'
import ForgotPasswordPage from '../pages/Auth/forgot-password'

const {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} = require('react-router-dom')

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="component" element={<TestComponents />} />
        <Route path="product-detail/:product_id" element={<ProductDetail />} />
        <Route path="shop/page?/:pageIndex?" element={<Product />} />
        <Route
          path="product-category/:cateId/page?/:pageIndex?"
          element={<Product />}
        />

        <Route path="about_us" element={<AboutUs />} />
        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="my_account" element={<AccountPage />}>
            <Route path="edit_account" element={<EditAccount />} />
          </Route>
        </Route>
      </Route>
      <Route path="undeveloped" element={<Undeveloped />} />
      <Route path="*" element={<NoMatch />} />
      <Route path="payment-success" element={<PaymentSuccess />} />
    </Route>
  )
)

export default router
