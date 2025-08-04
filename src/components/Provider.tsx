"use client";
import store from "@/redux/store";
import { Provider } from "react-redux";

type Props={
  children?:React.ReactNode
}

export default function TODOProvider({ children }:Props) {
  return <Provider store={store}>{children}</Provider>;
}
