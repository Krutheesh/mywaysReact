import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Store from './pages/Store'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
  {
    path:"/home",
    element:<Home/>,
  },
  {
    path:"/food",
    element:<Store/>,
  },
  {
    path:"*",
    element:<PageNotFound/>,
  } ]
},
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);


