import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./actions";

const appStore = configureStore({
    reducer: {
        todos: todoSlice
    },
})

export default appStore;