import React from 'react'
import './globals.css'
import TODOProvider from '@/components/Provider'

export const metadata = {
    title: 'Next-JS TODO App',
    description: 'Generated by create next app',
}

const RootLayout = ({ children }) => {
    return <TODOProvider>
        {children}
    </TODOProvider>
}

export default RootLayout;