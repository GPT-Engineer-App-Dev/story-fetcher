import { Button } from "@/components/ui/button";
import { NavLink, Outlet } from "react-router-dom";
import { navItems } from "../App";
import { Package2 } from "lucide-react";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background border-b">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <NavLink to="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span>Hacker News App</span>
            </NavLink>
            <div className="flex gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 ${
                      isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                    }`
                  }
                >
                  {item.icon}
                  {item.title}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;