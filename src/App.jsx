import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home";
import Footer from "./Component/Footer";

const AppLayout = () => {
  return (
    <div className="max-w-[1500px] m-auto">
      <Outlet />
      <Footer />
    </div>
  );
};
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
