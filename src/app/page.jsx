'use client'

import React, { useState } from 'react'

const Page = () => {
  let [arr, setArr] = useState([])
  return (
    <div>
      page
      {arr.map(() => { })}
      <button onClick={() => { setArr('') }}>Break</button>
    </div>
  )
}

export default Page