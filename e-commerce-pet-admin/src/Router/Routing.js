import { createBrowserRouter } from 'react-router-dom'
import ComponentPage from '../Pages/ComponentPage'
import MainLayout from '../Layout/MainLayout/MainLayout'
import { APP_ROUTER } from '../Utils/Constants'
import HomePage from '../Pages/Home/HomePage'
import AuthLayout from '../Layout/AuthLayout/AuthLayout'
import { loaderUser } from './loader/loaderAuth'
import CategoryPage from '../Pages/CategoryPage/index'
import Login from '../Pages/Auth/Login/Login'
import Register from '../Pages/Auth/Register/Register'
import ListCategoryPage from '../Pages/CategoryPage/List'
import CategoryAddPage from '../Pages/CategoryPage/Add'
import ListUserPage from '../Pages/UserPage/List'
import UserAddPage from '../Pages/UserPage/Add'
import UserPage from '../Pages/UserPage'
import Profile from '../Components/Shared/Header/Profile'
import ProductPage from '../Pages/ProductPage'
import ListProductPage from '../Pages/ProductPage/List'
import AddProductPage from '../Pages/ProductPage/Add'
import CreateInvoice from '../Pages/CreateInvoicePage/CreateInvoice'
import PrivateRoutes from './PrivateRoute'
import OrderPage from '../Pages/OrderPage'
import ListOrderPage from '../Pages/OrderPage/List/OrderPage'
import AttributePage from '../Pages/AttributePage'
import AttributeAddPage from '../Pages/AttributePage/Add'
import ListAttributePage from '../Pages/AttributePage/List'
const router = createBrowserRouter([
    {
        path: APP_ROUTER.INDEX,
        loader: (request) => loaderUser(request),
    },
    {
        path: APP_ROUTER.INDEX,

        element: (
            <PrivateRoutes>
                <MainLayout />
            </PrivateRoutes>
        ),

        children: [
            {
                path: APP_ROUTER.HOME,
                element: <HomePage />,
                index: true,
            },
            {
                path: APP_ROUTER.INVOICE,
                element: <CreateInvoice />,
                index: true,
            },
            {
                path: APP_ROUTER.CATEGORY,
                element: <CategoryPage />,
                children: [
                    { path: APP_ROUTER.CATEGORY_LIST, element: <ListCategoryPage />, index: true },
                    { path: APP_ROUTER.CATEGORY_ADD, element: <CategoryAddPage /> },
                ],
            },
            {
                path: APP_ROUTER.ATTRIBUTE,
                element: <AttributePage />,
                children: [
                    { path: APP_ROUTER.ATTRIBUTE_LIST, element: <ListAttributePage />, index: true },
                    { path: APP_ROUTER.ADD_ATTRIBUTE, element: <AttributeAddPage /> },
                ],
            },
            {
                path: APP_ROUTER.PRODUCT,
                element: <ProductPage />,
                children: [
                    { path: APP_ROUTER.PRODUCT_LIST, element: <ListProductPage />, index: true },
                    { path: APP_ROUTER.ADD_PRODUCT, element: <AddProductPage /> },
                ],
            },
            {
                path: APP_ROUTER.ORDER,
                element: <OrderPage />,
                children: [
                    {
                        path: APP_ROUTER.ORDER_LIST,
                        element: <ListOrderPage />,
                        index: true,
                    },
                ],
            },

            {
                path: APP_ROUTER.USER,
                element: <UserPage />,
                children: [
                    { path: APP_ROUTER.USER_LIST, element: <ListUserPage />, index: true },
                    { path: APP_ROUTER.USER_ADD, element: <UserAddPage /> },
                    {
                        path: APP_ROUTER.USER_NOW_PROFILE,
                        index: true,
                        element: <Profile />,
                    },
                ],
            },
            {
                path: APP_ROUTER.COMPONENT,
                element: <ComponentPage />,
            },
        ],
    },
    {
        path: APP_ROUTER.AUTH,
        element: <AuthLayout />,
        children: [
            {
                path: APP_ROUTER.LOGIN,
                element: <Login />,
                index: true,
            },
            {
                path: APP_ROUTER.REGISTER,
                element: <Register />,
            },
        ],
    },
])

export default router
