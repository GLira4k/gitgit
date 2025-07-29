import React from "react";
import { Route, Routes } from "react-router-dom";
import ReposPage from "./pages/ReposPage";
import MainPage from "./pages/MainPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/repositories" element={<ReposPage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
}
