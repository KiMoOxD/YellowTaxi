import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import GeneralContextProvider from "./context/GeneralContext";
import Predict from "./components/Predict";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import AuthProvider from "./context/AuthContext";
import ErrorPage from './components/error'

const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "predict", element: <Predict /> },
      { path: "signup", element: <SignUp /> },
      { path: "signin", element: <SignIn /> },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <GeneralContextProvider>
        <RouterProvider router={router} />
      </GeneralContextProvider>
    </AuthProvider>
  );
}

export default App;
