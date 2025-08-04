"use client";
import React, { useState } from "react";
import TodoConfirmed from "./TodoConfirmed";
import EditTodo from "./EditTodo";
import { Todo as ITodo } from "@/redux/actions";
import { Paper } from "@mui/material";

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
