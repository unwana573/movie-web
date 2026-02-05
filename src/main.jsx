import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './routes/index.jsx'
import { RouterProvider } from 'react-router-dom';
import axios from 'axios'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`;
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
      {/* <App /> */}
  </Provider>,
)