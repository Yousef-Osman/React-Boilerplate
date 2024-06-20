import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
      path: "",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/register", element: <RegisterPage /> },
      ],
    },
  ]);
  
  export default router;