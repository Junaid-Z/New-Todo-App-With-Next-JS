import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./actions";
import { useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
});

export default store;

export const useStore =
  useSelector.withTypes<ReturnType<typeof store.getState>>();
export const useStoreDispatch = useDispatch.withTypes<typeof store.dispatch>();
