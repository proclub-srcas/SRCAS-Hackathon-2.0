"use client";

import { useEffect, useState } from "react";
import { Sidebar } from "@/components/sidebar";
import MobileSidebar from "@/components/MobileSidebar";

export default function ClientLayout() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className="sm:block hidden">
        <Sidebar />
      </div>
      <div className="block sm:hidden">
        <MobileSidebar />
      </div>
    </>
  );
}
