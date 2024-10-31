import React, { ReactNode, useEffect, useState } from "react";
import Header from "./Head";
import { Navbar } from "./Navbar";
import { SplashScreen } from "./SplashScreen";
import { navItems } from "@/interfaces/navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Header pageTitle="Wildan Luqmanul Hakim" />
          <SplashScreen />
        </>
      ) : (
        <>
          <Header pageTitle="Wildan Luqmanul Hakim" />
          <div className="selection:bg-[#FFFFA6] selection:text-black">
            <Navbar items={navItems} />
            <main>{children}</main>
            <Footer items={navItems} />
          </div>
        </>
      )}
    </>
  );
};
