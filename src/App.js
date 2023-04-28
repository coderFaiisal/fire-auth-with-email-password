import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Main from "./layout/Main";
import Login from "./components/Login/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <RegisterForm></RegisterForm> },
        { path: "/register", element: <RegisterForm></RegisterForm> },
        { path: "/login", element: <Login></Login> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
