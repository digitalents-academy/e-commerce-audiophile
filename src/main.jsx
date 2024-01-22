import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Headphones from './pages/Headphones.jsx'
import Earphones from './pages/Earphones.jsx'
import Speakers from './pages/Speakers.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/headphones",
        element: <Headphones />
      },
      {
        path: "/speakers",
        element: <Speakers />
      },
      {
        path: "/earphones",
        element: <Earphones />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
