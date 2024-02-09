import React from "react";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};
