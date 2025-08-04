'use client'
import { ErrorComponent } from 'next/dist/client/components/error-boundary'
import React, { Fragment } from 'react'

const Default:ErrorComponent = ({ error, reset }) => {
  console.log(error)
  return (<Fragment>
    <div>An error occurred</div>
    <button onClick={() => { reset?.() }}>Reset</button>
  </Fragment>
  )
}

export default Default