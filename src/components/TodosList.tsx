"use client";
import { useStore } from "@/redux/store";
import Todo from "./Todo";
import { Box } from "@mui/material";

function TodosList() {
  const todos = useStore((store) => store.todos);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
    </Box>
  );
}

export default TodosList;
