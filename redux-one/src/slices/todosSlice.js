import { createSlice } from '@reduxjs/toolkit';
import { createEntityAdapter } from '@reduxjs/toolkit';

// Создание адаптера для задач
const todosAdapter = createEntityAdapter();

const initialState = todosAdapter.getInitialState();

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      todosAdapter.addOne(state, {
        id: Date.now(),
        text: action.payload,
      });
    },
    removeTodo: (state, action) => {
      todosAdapter.removeOne(state, action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;

// Экспортируем селекторы, созданные с помощью адаптера
export const {
  selectAll: selectAllTodos, // Получение всех задач
  selectById: selectTodoById, // Получение задачи по ID
  selectIds: selectTodoIds, // Получение списка всех ID
} = todosAdapter.getSelectors(state => state.todos);
