import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from './counterSlice.js';
import { goobs } from './counterSlice.js';
import todosReducer from './todosSlice';
import userReducer from './userSlice';

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState()); // Выводим новое состояние в консоль
  console.log('birs: ');
  console.log(goobs);
  console.groupEnd();
  return result;
};


export default configureStore({
  reducer: {
    // Свойство counter будет внутри объекта общего состояния: state.counter
    counter: goobs,// counter: counterReducer,
    todos: todosReducer,
    user: userReducer,  // Добавляем редьюсер пользователя
  },
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat([logger, api]),
    getDefaultMiddleware().concat([logger]),
});
