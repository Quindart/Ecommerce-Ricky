import ReactDOM from 'react-dom'
import App from './App'
import './Styles/index.css'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './Theme/theme'
import { I18nextProvider } from 'react-i18next'
import i18n from './translation/i18n'
import { SnackbarProvider } from 'notistack'
import { Zoom } from '@mui/material'
import { themeSnackbar } from './Theme/themeSnackbar'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'  
import { persistor, store } from './store/store'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <I18nextProvider i18n={i18n}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <SnackbarProvider
                    maxSnack={5}
                    TransitionComponent={Zoom}
                    Components={themeSnackbar}
                    autoHideDuration={2000}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                    <Provider store={store}>
                        <PersistGate persistor={persistor}>
                            <App />
                        </PersistGate>
                    </Provider>
                </SnackbarProvider>
            </LocalizationProvider>
        </I18nextProvider>
    </ThemeProvider>,
    document.getElementById('root'),
)
