import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import errorPage from './errorPage';
import Home from './pages/Home';
import { SocketProvider } from './providers/Socket';
import Room from './pages/Room';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <errorPage />,
  },
  {
    path: '/home',
    element: <Home />,
    errorElement: <errorPage />,
  },
  {
    path: '/room/:roomId',
    element: <Room />,
    errorElement: <errorPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SocketProvider>
      <RouterProvider router={router} />
    </SocketProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
