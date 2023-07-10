"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-12 h-14 py-4 shadow-xl items-center bg-violet-300">
      <div className="text-xl flex items-center">
        <Image
          src="logo.svg"
          alt="logo"
          width={64}
          height={64}
          className="rounded-full cursor-pointer"
        />
        <h2 className="text-indigo-800">Mutaru tarot</h2>
      </div>
      {/* menu for desktop */}
      <ul className="hidden sm:flex gap-5 text-lg text-indigo-800">
        <li className="cursor-pointer hover:underline">
          <Link href="/">Home</Link>
        </li>
        <li className="cursor-pointer hover:underline">
          <Link href="About">About</Link>
        </li>
        <li className="cursor-pointer hover:underline">
          <Link href="Services">Services</Link>
        </li>
        <li className="cursor-pointer hover:underline">
          <Link href="Contact">Contact</Link>
        </li>
      </ul>
      {/* menu for mobile */}
      <div className="sm:hidden">
        <Menu>
          <MenuButton
            className="bg-violet-400 rounded-md px-2 py-1 text-gray-100"
            as={Button}
          >
            Menu
          </MenuButton>
          <MenuList className="bg-violet-400 px-2 py-1 rounded-md text-gray-100">
            <MenuItem>
              <Link href="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/About">About</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/Services">Services</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/Contact">Contact</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
