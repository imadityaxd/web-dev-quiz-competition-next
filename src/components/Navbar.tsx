"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { FaHome, FaTrophy, FaUserCheck } from "react-icons/fa";
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
      name: "competition",
      link: "/start-quiz",
      icon: (
        <FaTrophy className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
