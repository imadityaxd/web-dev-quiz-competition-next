"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { FaHome, FaUserCheck } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
export function Navbar() {

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about-competition",
      icon: (
        <FaUserCheck className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Quiz",
      link: "/start-quiz",
      icon: (
        <AiFillMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
