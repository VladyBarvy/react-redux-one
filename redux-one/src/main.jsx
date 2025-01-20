import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css'
import App from './components/App.jsx'
import store from './slices/index.js';



// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)



// const mountNode = document.getElementById('container');
// const root = ReactDOM.createRoot(mountNode);
// // Оборачиваем приложение в Provider и передаем хранилище в него
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

