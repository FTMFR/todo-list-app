import { createSlice } from "@reduxjs/toolkit";
import { loadTodos, saveTodos } from "../utils/localStorageHelpers";

const initialValue = {
  filterStatus: "all",
  todoList: loadTodos(),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
      saveTodos(state.todoList);
    },
    updateTodo: (state, action) => {
      const index = state.todoList.findIndex((t) => t.id === action.payload.id);
      if (index !== -1) {
        state.todoList[index] = {
          ...state.todoList[index],
          title: action.payload.title,
          status: action.payload.status,
        };
        saveTodos(state.todoList);
      }
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
      saveTodos(state.todoList);
    },
    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, updateFilterStatus } =
  todoSlice.actions;
export default todoSlice.reducer;
