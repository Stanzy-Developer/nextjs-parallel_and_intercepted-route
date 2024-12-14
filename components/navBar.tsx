import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <>
      <nav className="flex items-center border-b border-white pt-10 pb-1">
        <Link href="/">
          <Button variant="link" className="text-white">
            Dashboard
          </Button>
        </Link>
        <Link href="/setting">
          <Button variant="link" className="text-white">
            Settings
          </Button>
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
