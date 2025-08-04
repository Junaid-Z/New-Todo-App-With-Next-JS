"use client";
import React, { useState } from "react";
import { useStore } from "@/redux/store";
import TodoConfirmed from "./TodoConfirmed";
import EditTodo from "./EditTodo";
import { Todo as ITodo } from "@/redux/actions";

type Props={
  todo:ITodo
}

const Todo = ({ todo: { id } }:Props) => {
  const todo = useStore(({ todos }) => todos.filter((t) => t.id == id)[0]);
  const [isEditing, setIsEditing] = useState(false);
  if (isEditing) {
    return (
      <EditTodo
        todo={todo}
        onCancel={() => setIsEditing(false)}
        onConfirm={() => setIsEditing(false)}
      />
    );
  }
  return <TodoConfirmed todo={todo} onEdit={() => setIsEditing(true)} />;
};

export default React.memo(Todo);
