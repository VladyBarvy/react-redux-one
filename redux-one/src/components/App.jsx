// import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
// import '../App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App




import React from 'react';
// Хуки находятся в react-redux
import { useSelector, useDispatch } from 'react-redux';
// Импортируем нужные действия
import { decrement, increment, incrementByAmount } from '../slices/counterSlice.js';
import TodoApp from './TodoApp';
import UserComponent from './UserComponent.jsx';

function App() {
  // Вытаскиваем данные из хранилища
  // Здесь state — это все состояние
  const count = useSelector((state) => state.counter.value);
  // Возвращает метод store.dispatch() текущего хранилища
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Прибавить
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Отнять
        </button>
        <br />
        <button onClick={() => dispatch(incrementByAmount(42))}>Прибавить 42</button>
      </div>


      <div className="App">
        <TodoApp />
      </div>


      <div>
        <UserComponent userId={1} />  {/* Указываем id пользователя для запроса */}
      </div>

    </div>
  );
};

export default App
