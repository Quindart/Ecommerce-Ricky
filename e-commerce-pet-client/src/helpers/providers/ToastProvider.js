import React from 'react'
import { ToastContainer } from 'react-toastify'

export default function ToastProvider({ children }) {
    return (
        <div>
            {children}
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    )
}
