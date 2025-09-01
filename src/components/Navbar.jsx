"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-grid opacity-80 text-white relative z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-xl font-semibold">✳ scout</div>

        <ul className="hidden md:flex gap-6 text-sm">
          <li><a href="#features" className="hover:text-gray-300">Features</a></li>
          <li><a href="#pricing" className="hover:text-gray-300">Pricing</a></li>
          <li><a href="#trusted" className="hover:text-gray-300">Docs</a></li>
          <li><a href="#companies" className="hover:text-gray-300">Blog</a></li>
        </ul>

        <div className="hidden md:flex gap-4">
          <button className="border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition">
            Login
          </button>
          <button className="bg-white text-black px-4 py-1 rounded-full hover:opacity-80 transition">
            Sign Up
          </button>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/90 px-6 pb-6">
          <ul className="flex flex-col gap-4 text-sm mt-4">
            <li><a href="#features" onClick={() => setIsOpen(false)}>Features</a></li>
            <li><a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a></li>
            <li><a href="#docs" onClick={() => setIsOpen(false)}>Docs</a></li>
            <li><a href="#blog" onClick={() => setIsOpen(false)}>Blog</a></li>
          </ul>

          <div className="flex flex-col gap-3 mt-6">
            <button className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
              Login
            </button>
            <button className="bg-white text-black px-4 py-2 rounded-full hover:opacity-80 transition">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
