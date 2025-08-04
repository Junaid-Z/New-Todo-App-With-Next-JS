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
        {todos.map((todo) => {
          return (
            <motion.div
              key={todo.id}
              variants={collapseVariants}
              animate={"enter"}
              initial={"initial"}
              exit={"exit"}
              style={{ overflow: "hidden" }}
            >
              <Box sx={{ p: 2 }}>
                <motion.div
                  variants={transformVariants}
                  transition={{
                    duration: 0.5,
                    ease: [0, 1.2, 1, 1],
                  }}
                >
                  <Todo todo={todo} />
                </motion.div>
              </Box>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </Box>
  );
}

export default TodosList;

const transformVariants: Variants = {
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

const collapseVariants: Variants = {
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.4,
      delay: 0.5,
      ease: [0, 1.2, 1, 1],
    },
  },
};
