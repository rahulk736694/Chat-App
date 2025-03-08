import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SetAvatar from "./components/SetAvatar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Configure the router with future flags enabled
const router = createBrowserRouter(
  [
    { path: "/", element: <Login /> }, // Directly load Login instead of Navigate
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
    { path: "/setAvatar", element: <SetAvatar /> },
    { path: "/chat", element: <Chat /> },
    { path: "*", element: <Login /> }, // Redirect unknown routes to Login
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

function App() {
  return <RouterProvider future={{ v7_startTransition: true }} router={router} />;
}

export default App;


