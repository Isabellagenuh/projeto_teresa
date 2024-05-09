import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Teresa from "./pages/Teresa"
import Personagens from './pages/Personagens';
import Header from './pages/Header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />
  },
  {
    path: "/",
    element: <Teresa />
  },
  {
    path: "/personagens",
    element: <Personagens />
  },
])


export default function App() {
  return (
    <RouterProvider router={router} />
  )
}

