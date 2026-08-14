import AppShell from "./app-shell";
import Home from "./routes/home";
import Dashboard from "./routes/dashboard";
import Login from "./routes/login";
import SuccessPage from "./routes/success";
import { createBrowserRouter } from "react-router";

function NotFound() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-semibold">404</h1>
      <p className="text-muted-foreground">The requested page could not be found.</p>
    </main>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "success", element: <SuccessPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
