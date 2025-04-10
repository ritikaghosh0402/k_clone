import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import ThemeToggle from "@/components/theme-toggle"
import MobileMenu from "@/components/mobile-menu"
import ProductDropdown from "@/components/product-dropdown"
import SolutionsDropdown from "@/components/solutions-dropdown"
import MicrosoftBadge from "@/components/microsoft-badge"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-indigo-600 flex items-center justify-center rounded">
                  <span className="text-white font-bold">K</span>
                </div>
                <span className="text-xl font-bold">Kidjig</span>
              </Link>

              <nav className="hidden md:flex items-center space-x-6">
                <ProductDropdown />
                <SolutionsDropdown />
                <Link href="#" className="text-gray-300 hover:text-white">
                  Pricing
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  FAQ
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  ContactUs
                </Link>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link
                href="#"
                className="hidden md:block text-gray-300 hover:text-white px-4 py-2 rounded-md border border-gray-700"
              >
                Schedule demo
              </Link>
              <Link
                href="#"
                className="hidden md:block bg-indigo-700 hover:bg-indigo-600 text-white px-4 py-2 rounded-md"
              >
                Sign in
              </Link>
              <Link
                href="#"
                className="hidden md:block bg-indigo-700 hover:bg-indigo-600 text-white px-4 py-2 rounded-md"
              >
                Sign Up
              </Link>
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-8">
              <MicrosoftBadge />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Build Powerful AI Applications
              <br />
              With{" "}
              <span className="text-indigo-400 border border-dashed border-indigo-400 px-4 py-2 rounded-lg">
                Seamless Integrations
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Enterprise Grade <span className="text-white font-medium">AI Platform</span> with Complete Solution for{" "}
              <span className="text-white font-medium">AI Integrations</span>.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md flex items-center">
                Try KidJig API
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-gray-700 text-gray-300 hover:text-white px-6 py-2 rounded-md">
                Read the Docs
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
