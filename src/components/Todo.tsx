"use client";
import { Todo as ITodo } from "@/redux/actions";
import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import EditTodo from "./EditTodo";
import TodoConfirmed from "./TodoConfirmed";

type Props = {
  todo: ITodo;
};

const Todo = ({ todo }: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Paper
      sx={{
        p: 1,
        borderColor: (theme) => {
          return todo.done
            ? theme.palette.success.main
            : theme.palette.error.light;
        },
        borderWidth: 2,
        borderStyle: "solid",
      }}
    >
      {isEditing ? (
        <EditTodo
          todo={todo}
          onCancel={() => setIsEditing(false)}
          onConfirm={() => setIsEditing(false)}
        />
      ) : (
        <TodoConfirmed todo={todo} onEdit={() => setIsEditing(true)} />
      )}
    </Paper>
  );
};

export default React.memo(Todo);
