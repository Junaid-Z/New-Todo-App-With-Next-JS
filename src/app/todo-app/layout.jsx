'use client'
import React from 'react'
import appStore from '@/redux/store'
import { Provider } from 'react-redux'


const layout = ({ children }) => {
    return <Provider store={appStore}>
        {children}
    </Provider>
}

export default layout