"use client";
import Link from "next/link";
import React from "react";
import { FaExclamationTriangle } from "react-icons/fa"; // Optional icon

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black-100 text-white p-4">
      <div className="flex flex-col items-center justify-center text-center max-w-md mx-auto">
        <FaExclamationTriangle className="text-6xl mb-4" />
        <h1 className="text-4xl font-bold mb-2 text-purple md:text-5xl">
          404 - Page Not Found
        </h1>
        <p className="text-lg mb-4 md:text-xl">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="text-blue-400 hover:underline text-lg md:text-xl"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
