import { BanIcon, CircleAlertIcon, Search } from 'lucide-react';
import React from 'react';
import toast from 'react-hot-toast';

const baseStyle = 'flex items-center justify-between p-4 rounded-lg shadow-md transition-all duration-300';

export const showSuccessToast = (message: string) => {
  toast.custom(t => {
    return (
        <div className={`${baseStyle} bg-green-50 text-green-800 ${t.visible ? 'animate-enter' : 'animate-leave'}`}>
            <div className="toast-content">
              <Search />
            <span>{message}</span>
            </div>
        </div>
    )
  })
}

export const showErrorToast = (message: string) => {
  toast.custom(t => {
    return (
        <div className={`${baseStyle} bg-red-50 text-red-800 ${t.visible ? 'animate-enter' : 'animate-leave'}`}>
            <div className="toast-content">
              <BanIcon />
            <span>{message}</span>
            </div>
        </div>
    )
  })
}

export const showWarningToast = (message: string) => {
  toast.custom(t => {
    return (
        <div className={`${baseStyle} bg-amber-50 text-amber-600 ${t.visible ? 'animate-enter' : 'animate-leave'}`}>
            <div className="toast-content">
              <CircleAlertIcon />
            <span>{message}</span>
            </div>
        </div>
    )
  })
}