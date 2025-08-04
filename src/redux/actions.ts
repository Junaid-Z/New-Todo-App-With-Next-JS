import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
  id: string;
  data: string;
  done: boolean;
};

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Omit<Todo, "id">>) => {
      const { payload: todo } = action;
      const id = crypto.randomUUID();
      state.push({ id, ...todo });
    },
    edit: (todos, action: PayloadAction<Todo>) => {
      const todo = action.payload;
      for (let i = 0; i < todos.length; i++) {
        if (todo.id == todos[i].id) {
          todos[i] = todo;
        }
      }
    },
    clear: () => [],
    remove: (todos, action: PayloadAction<string>) => {
      return todos.filter((todo) => {
        return todo.id != action.payload;
      });
    },
  },
});

export default todoSlice.reducer;
export const { add, clear, remove, edit } = todoSlice.actions;
