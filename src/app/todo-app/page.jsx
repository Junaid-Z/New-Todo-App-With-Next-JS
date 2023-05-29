'use client'

import React from 'react'
import Head from 'next/head'
import { Mukta } from 'next/font/google'
import { Roboto } from 'next/font/google';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '@/redux/actions'
import { Button, TextField } from '@mui/material'
import TodoItem from '@/components/TodoItem'
import styles from '@/style/TodoPage.module.css'
import ClearQueue from '@/components/clearQueue'


const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
});
const mukta = Mukta({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
});



const Page = () => {
    const store = useSelector((store) => store.todos)
    const dispatch = useDispatch();
    let [input, setInput] = useState({ confirmed: true, data: '', newData: '' });
    return <div className={styles.container}>
        <Head>
            <title>TODO APP</title>
        </Head>
        <div className={styles.inputSideBar}>
            <div className={styles.addTab}>
                <TextField
                    label="TODO"
                    variant="outlined"
                    value={input.data}
                    //On press of enter key add todo item to list
                    onKeyUp={(e) => {
                        if (e.key === 'Enter') {
                            if (input.data) {
                                dispatch(add(input)); setInput({ confirmed: true, data: '', newData: '' })
                            }
                        }
                    }}
                    // On change take new value of input and assign it to the data property of todoObject
                    onChange={(e) => {
                        setInput((prev) => {
                            return {
                                ...prev,
                                data: e.target.value
                            }
                        })
                    }} />
                {/* Confirm Button */}
                <Button className={roboto.className} variant="contained" onClick={() => {
                    // If Input is not empty add todo to array
                    if (input.data) {
                        dispatch(add(input)); setInput({ confirmed: true, data: '', newData: '' })
                    }
                }}>Add</Button>
            </div>
        </div>
        <div className={styles.todosHolder}>
            <h1 className={mukta.className}>TODOS</h1>
            {store.map((todo, i) => {
                return <TodoItem todo={todo} key={i} index={i} />
            })}
        </div>
        <ClearQueue />
    </div>
}

export default Page