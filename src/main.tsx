import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './pages/Signin.tsx';
import Signup from './pages/Signup'; 

const router = createBrowserRouter([
  {path: '/',
  element: <Signin />
    },
  {
      path: '/signin',
      element: <Signin />
  },
  {
    path:'/signup',
    element: <Signup />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
