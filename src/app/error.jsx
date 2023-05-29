'use client'
import React, { Fragment } from 'react'

const Default = ({ error, reset }) => {
  console.log(error)
  return (<Fragment>
    <div>An error occurred</div>
    <button onClick={() => { reset() }}>Reset</button>
  </Fragment>
  )
}

export default Default