import React, { ReactNode } from "react";
import "../../globals.css";
import { Toaster } from "@/components/ui/toaster";
import Sidebar from "@/components/Admin/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="min-h-screen flex-1 p-4">{children}</div>
      <Toaster />
    </div>
  );
};

export default Layout;
