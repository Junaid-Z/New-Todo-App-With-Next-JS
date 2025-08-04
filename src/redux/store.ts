import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./actions";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
});

export default store;

export const useStore: TypedUseSelectorHook<ReturnType<typeof store.getState>> =
  useSelector;
export const useStoreDispatch: () => typeof store.dispatch = useDispatch;
