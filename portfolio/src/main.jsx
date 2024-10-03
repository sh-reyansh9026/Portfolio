import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Technologies from "./components/Technologies.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/Education",
        element: <Education />,
      },
      {
        path: "/Projects",
        element: <Projects />,
      },
      {
        path: "/Technologies",
        element: <Technologies />,
      },
      {
        path: "/Experience",
        element: <Experience />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
