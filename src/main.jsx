import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Checkout from './pages/Checkout.jsx'

import Headphones from './pages/Headphones.jsx'
import Earphones from './pages/Earphones.jsx'
import Speakers from './pages/Speakers.jsx'

import XX99Mark2 from './pages/headphones/XX99Mark2.jsx'
import XX99Mark1 from './pages/headphones/XX99Mark1.jsx'
import XX59Phone from './pages/headphones/XX59.jsx'

import ZX9Speakers from './pages/speakers/ZX9Speakers.jsx'
import ZX7Speakers from './pages/speakers/ZX7Speakers.jsx'

import YX1Wireless from './pages/earphones/YX1Wireless.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
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
      },
      {
        path: "/checkout",
        element: <Checkout />
      },
      {
        path: "/headphones/xx99-mark-two-headphones",
        element: <XX99Mark2 />
      },
      {
        path: "/headphones/xx99-mark-one-headphones",
        element: <XX99Mark1 />
      },
      {
        path: "/headphones/xx59-headphones",
        element: <XX59Phone />
      },
      {
        path: "/speakers/zx9-speakers",
        element: <ZX9Speakers />
      },
      {
        path: "/speakers/zx7-speakers",
        element: <ZX7Speakers />
      },
      {
        path: "/earphones/yx1-earphones",
        element: <YX1Wireless />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
