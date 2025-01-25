import { createSlice } from '@reduxjs/toolkit';

// Начальное состояние с нормализованными данными
const initialState = {
  entities: {},
  ids: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      const newTodo = {
        id: Date.now(),
        text: payload,
      };
      // Добавляем новый todo в entities и добавляем его ID в ids
      state.entities[newTodo.id] = newTodo;
      state.ids.push(newTodo.id);
    },
    removeTodo: (state, action) => {
      const todoId = action.payload;
      // Удаляем задачу из entities по ID и удаляем ID из ids
      delete state.entities[todoId];
      state.ids = state.ids.filter(id => id !== todoId);
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
