import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"


import AddCoffee from './component/AddCoffee.jsx'
import UpdateCoffee from './component/UpdateCoffee.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    loader:()=>fetch('http://localhost:5000/coffees')
  },
  
  {
    path:"/added",
    element:<AddCoffee></AddCoffee>
  },
  {
    path:'/update/:id',
    element:<UpdateCoffee></UpdateCoffee>,
    loader:({params})=>fetch(`http://localhost:5000/coffees/${params.id}`)
  }
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
