
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Bloge from './Pages/Bloge.jsx'
import BookMarks from './Pages/BookMarks.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import React from 'react'
import About from './Compontents/About/About.jsx'
const router =createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/blog',
        element:<Bloge></Bloge>
      },
      {
        path:'/bookMark',
        element:<BookMarks></BookMarks>
      },
      {
        path:'/about',
        element:<About></About>
      }
    ]
  }
  
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,
)
