import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { APIProvider } from '@vis.gl/react-google-maps'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Bloge from './Pages/Bloge.jsx'
import BookMarks from './Pages/BookMarks.jsx'
import MainLayout from './layouts/MainLayout.jsx'
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
      }
    ]
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <APIProvider>
      <RouterProvider router={router}></RouterProvider>
    </APIProvider>
  </StrictMode>,
)
