const { createSlice } = require("@reduxjs/toolkit");

const initialState = []

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add: (state, action) => {
            //takes a todo object from user and pushes it to the array
            state.push(action.payload)
        },
        edit: (state, action) => {
            //takes a todo index from user and it's new data and pushes it to the array
            state[action.payload.index] = {
                ...state[action.payload.index],
                ...action.payload.data
            }
        },
        clear: () => {
            //assigns empty array to state
            return []
        },
        remove: (state, action) => {
            //takes index of todo to delete
            state.splice(action.payload, 1)
        }
    }
})

export default todoSlice.reducer;
export const { add, clear, remove, edit } = todoSlice.actions;