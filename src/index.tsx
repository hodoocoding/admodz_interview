import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { worker } from "api/setup";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import App from "./App";

worker.start();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
);
