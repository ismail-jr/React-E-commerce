import React, { useContext, useState } from "react";
import cart_icon from "../Assets/cart_icon.png";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import Logo from "../Logo/Logo";
import { Button } from "@/Components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/Components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Shop", path: "/", key: "shop" },
  { label: "Women", path: "/womens", key: "womens" },
  { label: "Men", path: "/mens", key: "mens" },
  { label: "Kids", path: "/kids", key: "kids" },
];

const NavLink = ({ link, active, onClick, className }) => (
  <li className={cn("flex flex-col items-center gap-1", className)}>
    <Link
      to={link.path}
      onClick={onClick}
      className={cn(
        "text-base font-medium text-muted-foreground transition-colors hover:text-foreground md:text-lg",
        active && "text-foreground"
      )}
    >
      {link.label}
    </Link>
    {active && (
      <span className="h-0.5 w-4/5 rounded-full bg-brand" />
    )}
  </li>
);

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { getTotalCart } = useContext(ShopContext);
  const location = useLocation();

  const isActive = (link) => {
    if (link.path === "/") return location.pathname === "/";
    return location.pathname.startsWith(link.path);
  };

  const handleNavClick = (key) => {
    setMenu(key);
    setMobileOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4 md:h-20">
        <Logo />

        <ul className="hidden items-center gap-8 lg:flex xl:gap-12">
          {navLinks.map((link) => (
            <NavLink
              key={link.key}
              link={link}
              active={isActive(link)}
              onClick={() => setMenu(link.key)}
            />
          ))}
        </ul>

        <div className="flex items-center gap-3 md:gap-6">
          <Link to="/login" className="hidden sm:block">
            <Button
              variant="outline"
              className="rounded-full border-muted-foreground/30 px-6 text-base font-medium md:h-12 md:px-8 md:text-lg"
            >
              Login
            </Button>
          </Link>

          <Link to="/cart" className="relative">
            <img src={cart_icon} alt="Cart" className="h-6 w-6 md:h-7 md:w-7" />
            {getTotalCart() > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-xs font-medium text-white">
                {getTotalCart()}
              </span>
            )}
          </Link>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <ul className="mt-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.key}
                    link={link}
                    active={isActive(link)}
                    onClick={() => handleNavClick(link.key)}
                    className="items-start"
                  />
                ))}
              </ul>
              <Link to="/login" onClick={() => setMobileOpen(false)} className="mt-8 block">
                <Button className="w-full rounded-full" variant="outline">
                  Login
                </Button>
              </Link>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
