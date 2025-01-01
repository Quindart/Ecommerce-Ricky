import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './styles/global.scss'
import { SnackbarProvider } from 'notistack'
import StyledMaterialDesignContent from '../src/components/Snackbar/style'

import CustomVariantSnackbar from '../src/components/Snackbar/Snackbar'
import { persistor, store } from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'))
const themeSnackbar = {
  customVariant: CustomVariantSnackbar,
  warning: StyledMaterialDesignContent,
  info: StyledMaterialDesignContent,
  success: StyledMaterialDesignContent,
  error: StyledMaterialDesignContent,
}

root.render(
  <Provider store={store}>
    <SnackbarProvider
      // TransitionComponent={Zoom}
      Components={themeSnackbar}
      maxSnack={5}
      persist={false}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      timeOut={3000}
    >
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </SnackbarProvider>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
