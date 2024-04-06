import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import AppLayout from "./compnents/AppLayout";
import Home from "./features/home/Home";
import About from "./features/about/About";
import { ThemeProvider } from "./context/ThemeContext";
import Contact from "./features/contact/Contact";
import Projects from "./features/projects/Projects";
import Github, { loader as GithubLoader } from "./features/github/Github";
import Settings from "./features/settings/Settings";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/github",
        element: <Github />,
        loader: GithubLoader,
      },
      {
        path: "/settings",
        element: <Settings />,
        loader: GithubLoader,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 3000 },
          style: {
            maxWidth: "500px",
            fontSize: "16px",
            padding: "16px 24px",
            backgroundColor: "var(bgText)",
            color: "var(textColor)",
          },
        }}
      />
    </ThemeProvider>
  );
}
export default App;
