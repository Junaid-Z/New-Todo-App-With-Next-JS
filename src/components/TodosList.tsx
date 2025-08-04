"use client";
import { useStore } from "@/redux/store";
import Todo from "./Todo";
import { Box } from "@mui/material";
import { AnimatePresence, motion, Variants } from "motion/react";

function TodosList() {
  const todos = useStore((store) => store.todos);
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <AnimatePresence>
        {todos.map((todo, i) => {
          return (
            <motion.div
              key={todo.id}
              animate={"enter"}
              initial={"initial"}
              variants={variants}
              exit={"exit"}
              transition={{
                duration: 0.6,
                ease: [0, 1.2, 1, 1],
              }}
            >
              <Todo todo={todo} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </Box>
  );
}

export default TodosList;
const variants: Variants = {
  enter: {
    opacity: 1,
    transform: "TranslateX(0)",
  },
  exit: {
    opacity: 0,
    transform: "TranslateX(-50%)",
  },
  initial: {
    opacity: 0,
    transform: "TranslateX(50%)",
  },
};
