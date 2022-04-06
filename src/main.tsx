import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import AppShell from "./components/AppShell";
import Home from "./routes/Home";
import Appeals from "./routes/Appeals";
import FourOhFour from "./routes/FourOhFour";
import ModApplication from "./routes/ModApplication";

ReactDOM.render(
  <React.StrictMode>
    <MantineProvider>
      <NotificationsProvider position="top-right">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppShell />}>
              <Route index element={<Home />} />
              <Route path="appeals" element={<Appeals />} />
              <Route path="*" element={<FourOhFour />} />
            </Route>
            <Route path="/mod-application" element={<ModApplication />} />
          </Routes>
        </BrowserRouter>
      </NotificationsProvider>
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
