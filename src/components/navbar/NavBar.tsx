import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const NavBar = () => {
  return (
    <nav className="bg-orange-400 p-4 h-[5rem]">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl">
          <Image src="/logo.webp" alt="logo" width={50} height={50} />
        </Link>
        <ul className="flex space-x-4 gap-0">
          <li>
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-[1.5rem] w-[10rem] h-[3rem] hover:bg-orange-500">Home</Button>
            </Link>
          </li>
          <li>
            <Link href="/recipes">
              <Button variant="ghost" size="sm" className="text-[1.5rem] w-[10rem] h-[3rem] hover:bg-orange-500">Recipes</Button>
            </Link>
          </li>
        </ul>
        <span className="hover:text-white">
          <Link href="/login">Log in</Link>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
