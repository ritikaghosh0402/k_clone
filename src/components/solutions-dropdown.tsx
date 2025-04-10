"use client"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export default function SolutionsDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center text-gray-300 hover:text-white focus:outline-none">
        Solutions
        <ChevronDown className="ml-1 h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-gray-900 border-gray-800">
        <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-800">
          <Link href="#" className="w-full">
            Enterprise
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-800">
          <Link href="#" className="w-full">
            Startups
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-800">
          <Link href="#" className="w-full">
            Case Studies
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
