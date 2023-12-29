import React from "react";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 h-screen">
      <Outlet />
    </div>
  );
};
