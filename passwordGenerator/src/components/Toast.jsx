import React, { useEffect } from 'react'

function Toast({ message, isVisible, onClose }) {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose()
            }, 2000)
            return () => clearTimeout(timer)
        }
    }, [isVisible, onClose])

    return (
        <div className={`fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            {message}
        </div>
    )
}

export default Toast