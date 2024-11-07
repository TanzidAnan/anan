import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { APIProvider } from '@vis.gl/react-google-maps'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Bloge from './Pages/Bloge.jsx'
const router =createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>
  },
  {
    path:'/blog',
    element:<Bloge></Bloge>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <APIProvider>
      <RouterProvider router={router}></RouterProvider>
    </APIProvider>
  </StrictMode>,
)
