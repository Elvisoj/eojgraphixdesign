import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HomePage from './Pages/HomePage.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import ContextProvider from './Context/AppContext.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <HomePage />,
  errorElement: <ErrorPage />
},{
  path: "/dashboard",
  element: <Dashboard />
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>,
)
