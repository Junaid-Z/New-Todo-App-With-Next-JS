"use client";
import React, { useState } from "react";
import TodoConfirmed from "./TodoConfirmed";
import EditTodo from "./EditTodo";
import { Todo as ITodo } from "@/redux/actions";

type Props = {
  todo: ITodo;
};

const Todo = ({ todo }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  if (isEditing) {
    return (
      <EditTodo
        todo={todo}
        onCancel={() => setIsEditing(false)}
        onConfirm={() => setIsEditing(false)}
      />
    );
  } else {
    return (
      <TodoConfirmed
        todo={todo}
        onEdit={() => setIsEditing(true)}
      ></TodoConfirmed>
    );
  }
};

export default React.memo(Todo);
