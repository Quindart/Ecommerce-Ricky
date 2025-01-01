import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import appReducer from './app.slice'
import categoryReducer from './category.slice'
import userReducer from './userSlice'
import usersReducer from './user.slice'
import productReducer from './product.slice'
import orderReducer from './order.slice'
const rootReducer = combineReducers({
    user: userReducer,
    users: usersReducer,
    app: appReducer,
    categorys: categoryReducer,
    products: productReducer,
    orders: orderReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export const persistor = persistStore(store)
