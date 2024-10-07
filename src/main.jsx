import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Pages/Routes/Routes.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <RouterProvider router={router}></RouterProvider>
      </NextUIProvider>
    </QueryClientProvider>
  </StrictMode>
);
