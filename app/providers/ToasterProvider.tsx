'use client'

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
    return (
        <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
                className: '',
                duration: 3000,
                style: {
                    background: '#fff',
                    color: '#333'
                }
            }}
        />
    )
}

export default ToasterProvider;