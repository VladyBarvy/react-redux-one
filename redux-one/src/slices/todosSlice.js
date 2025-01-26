import { createSlice } from '@reduxjs/toolkit';
import { createEntityAdapter } from '@reduxjs/toolkit';

// Создание адаптера для задач
const todosAdapter = createEntityAdapter();




// Начальное состояние с нормализованными данными
/*
const initialState = {
  entities: {},
  ids: [],
};
*/
const initialState = todosAdapter.getInitialState();




const todosSlice = createSlice({
  name: 'todos',
  initialState,
  // reducers: {
  //   addTodo: (state, { payload }) => {
  //     const newTodo = {
  //       id: Date.now(),
  //       text: payload,
  //     };
  //     // Добавляем новый todo в entities и добавляем его ID в ids
  //     state.entities[newTodo.id] = newTodo;
  //     state.ids.push(newTodo.id);
  //   },
  //   removeTodo: (state, action) => {
  //     const todoId = action.payload;
  //     // Удаляем задачу из entities по ID и удаляем ID из ids
  //     delete state.entities[todoId];
  //     state.ids = state.ids.filter(id => id !== todoId);
  //   },
  // },

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
