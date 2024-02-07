import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
//pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Register from './pages/Register'

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path:'blog',
          element:<Blog/>
        },
        {
          path:'about',
          element:<About/>
        },
        {
          path:'register',
          element:<Register/>
        }
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
