"use client";
import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black-100 text-white">
      <div className="flex flex-col items-center">
        <FaSpinner className="animate-spin text-6xl mb-4" />
        <h1 className="text-xl font-semibold">Loading...</h1>
      </div>
    </div>
  );
};

export default Loading;
