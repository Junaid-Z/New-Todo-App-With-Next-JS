'use client'
import React, { useState } from 'react'

const Page = () => {
    let [arr, setArr] = useState([])
    return (<>
        <div>This is being Streamed</div>
        {arr.map(() => { })}
        <button onClick={() => { setArr('') }}>Break</button>
    </>
    )
}

export default Page