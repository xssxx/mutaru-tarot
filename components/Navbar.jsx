"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <nav className="flex px-4 justify-between sm:px-12 h-20 py-4 items-center bg-[#7c69bb]">
      <Link href="/">
        <div className="text-xl flex items-center">
          <Image
            src="logo.svg"
            alt="logo"
            width={69}
            height={69}
            className="rounded-full cursor-pointer"
          />
          <p className="text-gray-50 cursour-pointer">Mutaru tarot</p>
        </div>
      </Link>
      {/* menu for desktop */}
      <ul className="hidden md:flex gap-5 text-lg text-gray-50">
        <li className="cursor-pointer hover:underline">
          <Link href="/Pack">แพคดูดวง</Link>
        </li>
        <li className="cursor-pointer hover:underline">
          <Link href="/Gypsy">ดูดวงไพ่ยิปซี</Link>
        </li>
        <li className="cursor-pointer hover:underline">
          <Link href="/Western-Astrology">โหราศาสตร์ตะวันตก</Link>
        </li>
        <li className="cursor-pointer hover:underline">
          <Link href="/Trick">ทริกมู</Link>
        </li>
      </ul>
      {/* menu for mobile */}
      <div className="md:hidden z-10">
        <Menu>
          <MenuButton
            className="w-24 bg-violet-400 rounded-md px-2 py-1 text-gray-100"
            as={Button}
          >
            Menu
          </MenuButton>
          <MenuList className="w-52 bg-violet-400 px-2 py-1 rounded-md text-gray-100">
            <MenuItem>
              <Link href="/">แพคดูดวง</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/Gypsy">ดูดวงไพ่ยิปซี</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/Western-Astrology">โหราศาสตร์ตะวันตก</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/Trick">ทริกมู</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
