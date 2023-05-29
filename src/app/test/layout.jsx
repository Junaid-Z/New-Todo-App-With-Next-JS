import React from 'react'

const Layout = ({children,stream}) => {
  return (
    <div>
        {children}
        {stream}
    </div>
  )
}

export default Layout