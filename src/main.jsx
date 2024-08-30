import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import BlogListPage from "./pages/BlogListPage.jsx";
import "./assets/style.css";
import BlogPage from "./pages/BlogPage.jsx";
import PortofolioPage from "./pages/PortofolioPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/blog-list" element={<BlogListPage />}></Route>
      <Route path="/blog" element={<BlogPage />}></Route>
      <Route path="/portfolio" element={<PortofolioPage />}></Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
