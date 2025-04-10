"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Button variant="ghost" size="sm" onClick={toggleMenu} className="md:hidden text-gray-300 hover:text-white">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <span className="sr-only">Open menu</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 md:hidden">
          <div className="flex justify-end p-4">
            <Button variant="ghost" size="sm" onClick={toggleMenu} className="text-gray-300 hover:text-white">
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex flex-col items-center space-y-6 p-4">
            <Link href="#" className="text-xl text-gray-300 hover:text-white" onClick={toggleMenu}>
              Products
            </Link>
            <Link href="#" className="text-xl text-gray-300 hover:text-white" onClick={toggleMenu}>
              Solutions
            </Link>
            <Link href="#" className="text-xl text-gray-300 hover:text-white" onClick={toggleMenu}>
              Pricing
            </Link>
            <Link href="#" className="text-xl text-gray-300 hover:text-white" onClick={toggleMenu}>
              FAQ
            </Link>
            <Link href="#" className="text-xl text-gray-300 hover:text-white" onClick={toggleMenu}>
              ContactUs
            </Link>
            <div className="pt-6 space-y-4">
              <Link
                href="#"
                className="block w-full text-center text-gray-300 hover:text-white px-6 py-2 rounded-md border border-gray-700"
                onClick={toggleMenu}
              >
                Schedule demo
              </Link>
              <Link
                href="#"
                className="block w-full text-center bg-indigo-700 hover:bg-indigo-600 text-white px-6 py-2 rounded-md"
                onClick={toggleMenu}
              >
                Sign in
              </Link>
              <Link
                href="#"
                className="block w-full text-center bg-indigo-700 hover:bg-indigo-600 text-white px-6 py-2 rounded-md"
                onClick={toggleMenu}
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
