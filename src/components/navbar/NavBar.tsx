import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import HamburgerMenu from "../ui/hamburger";

const NavBar = () => {
  return (
    <nav className="bg-orange-400 p-4 h-[4rem] md:h-[5rem]" aria-label="Main navigation">
      <div className="container mx-auto flex justify-between items-center">
        {/* mobile */}
        <div className="md:hidden">
          <HamburgerMenu />
        </div>
        <Link href="/" className="text-white text-xl" aria-label="Home page">
          <Image src="/logo.webp" alt="logo" width={50} height={50} className="w-10 h-10 md:w-[50px] md:h-[50px]" />
        </Link>
        {/* menu for desktop */}
        <ul className="hidden md:flex space-x-4 gap-0">
          <li>
            <Link href="/" aria-label="Go to home page">
              <Button variant="ghost" size="sm" className="text-[1.5rem] w-[10rem] h-[3rem] hover:bg-orange-500">Home</Button>
            </Link>
          </li>
          <li>
            <Link href="/recipes" aria-label="View all recipes">
              <Button variant="ghost" size="sm" className="text-[1.5rem] w-[10rem] h-[3rem] hover:bg-orange-500">Recipes</Button>
            </Link>
          </li>
        </ul>
        <span className="hidden md:block hover:text-white">
          <Link href="/login" aria-label="Log in to your account">Log in</Link>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
