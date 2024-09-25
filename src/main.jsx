import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Pages/Routes/Routes.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
        <RouterProvider router={router}></RouterProvider>
    </NextUIProvider>
  </StrictMode>
);
