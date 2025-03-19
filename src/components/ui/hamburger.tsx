"use client"
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div
        className="fixed top-5 left-5 z-50 flex flex-col justify-between w-8 h-6 cursor-pointer select-none"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
        aria-expanded={isMenuOpen ? "true" : "false"}
        aria-controls="mobile-menu"
      >
        <div
          className={cn(
            "w-full h-1 bg-gray-800 rounded transition-transform",
            isMenuOpen ? "transform rotate-45 translate-y-2" : ""
          )}
        ></div>
        <div
          className={cn(
            "w-full h-1 bg-gray-800 rounded transition-opacity",
            isMenuOpen ? "opacity-0" : "opacity-100"
          )}
        ></div>
        <div
          className={cn(
            "w-full h-1 bg-gray-800 rounded transition-transform",
            isMenuOpen ? "transform -rotate-45 -translate-y-3" : ""
          )}
        ></div>
      </div>
      <div
        className={cn(
          "fixed top-16 left-0 w-40 h-55 bg-white shadow-lg p-5 flex flex-col items-center space-y-4 transform transition-transform",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <Link href="/" className="text-lg font-semibold hover:underline" onClick={closeMenu} aria-label="Go to home page">
          <Button variant="ghost" size="sm" className="text-[1.5rem] w-[10rem] h-[3rem] hover:bg-orange-500 rounded-none">Home</Button>
        </Link>
        <Link href="/recipes" className="text-lg font-semibold hover:underline" onClick={closeMenu} aria-label="View all recipes">
          <Button variant="ghost" size="sm" className="text-[1.5rem] w-[10rem] h-[3rem] hover:bg-orange-500 rounded-none">Recipes</Button>
        </Link>
        <span className="border-b-2 border-gray-800 w-full"></span>
        <Link href="/login" aria-label="Log in to your account">
          <Button variant="ghost" size="sm" className="text-[1.3rem] w-[10rem] h-[3rem] hover:bg-orange-500 rounded-none">Log in</Button>
        </Link>
      </div>
    </>
  );
};

export default HamburgerMenu;
