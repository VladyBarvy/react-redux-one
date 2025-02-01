import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from '../slices/todosSlice';
import { selectAllTodos, selectTodoIds } from '../slices/todosSlice';

const TodoApp = () => {
  const [newTodo, setNewTodo] = useState('');


  // const ids = useSelector((state) => state.todos.ids);  // Получаем ID задач
  // const entities = useSelector((state) => state.todos.entities);  // Получаем сами задачи
  const todos = useSelector(selectAllTodos); // Получаем все задачи через селектор

  
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
      console.log('boob: ', todos);
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={handleAddTodo}>Add Task</button>
      </div>
      <ul>
        {/* 
        {ids.map((id) => (
          <li key={id}>
            {entities[id].text}  
            <button onClick={() => handleRemoveTodo(id)}>Delete</button>
          </li>
        ))} 
        */}

        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} {/* Выводим текст задачи */}
            <button onClick={() => handleRemoveTodo(todo.id)}>Delete</button>
          </li>
        ))}

      </ul>
    </div>
  );
};

export default TodoApp;
