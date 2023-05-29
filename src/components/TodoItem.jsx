'use client'
import React from 'react'
import styles from '@/style/TodoItem.module.css'
import { TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { edit, remove } from '@/redux/actions'
import BlockIcon from '@mui/icons-material/Block';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch()
  return todo.confirmed ?
    //If Confirmed
    <div className={styles.todoItem}>
      <div className={styles.todoText}>
        {todo.data}
      </div>
      {/* Edit Button */}
      <div className={styles.todoOption}>
        <EditIcon onClick={() => {
          //Change todo state to not confirmed and "newData" property's value to "data" property's value
          dispatch(edit({
            index,
            data: {
              newData: todo.data,
              confirmed: false
            }
          }))
        }} />
      </div>
      {/* Delete Button */}
      <div className={styles.todoOption}>
        <DeleteIcon onClick={() => {
          //Send index of item to be deleted
          dispatch(remove(index))
        }} />
      </div>
    </div> :
    //Else
    <div className={styles.todoItem}>
      {/* TextField for user input, takes value from the "newData" property in todo object*/}
      <div className={styles.todoText}>
        <TextField
          className={styles.updateInput}
          value={todo.newData}
          onChange={(e) => {
            //Save input text to "newData" property of todo object
            dispatch(edit({
              index,
              data: {
                newData: e.target.value
              }
            }))
          }} />
      </div>
      {/* Cancel Button */}
      <div className={styles.todoOption}>
        <BlockIcon
          //Change todo state to confirmed and clear "newData" property's value in todo object
          onClick={() => {
            dispatch(edit({
              index,
              data: {
                newData: '',
                confirmed: true
              }
            }))
          }} />
      </div>
      {/* Confirm Button */}
      <div className={styles.todoOption}>
        <CheckIcon onClick={() => {
          //Set value of property "newData" in todo object to "data" attribute of todo object and clear the "newData" property
          dispatch(edit({
            index,
            data: {
              newData: '',
              data: todo.newData,
              confirmed: true
            }
          }))
        }} />
      </div>
    </div>

}

export default TodoItem