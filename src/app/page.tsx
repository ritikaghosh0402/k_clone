"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowRight,
  ChevronDown,
  Clock,
  Cpu,
  Database,
  LineChart,
  MessageSquare,
  Rocket,
  Server,
  Settings,
  Shield,
  Sun,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen bg-[#080818] text-white">
      {/* Fixed Navbar */}
      <header className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] rounded-xl border border-[#2e2e38] bg-black/80 shadow-lg backdrop-blur-md`}>
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-indigo-600 flex items-center justify-center rounded">
                  <span className="text-white font-bold">K</span>
                </div>
                <span className="text-xl font-bold">Kidjig</span>
              </Link>

              <nav className="hidden md:flex items-center space-x-6">
                <div className="relative group">
                  <button className="flex items-center text-gray-300 hover:text-white">
                    Products
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
                <div className="relative group">
                  <button className="flex items-center text-gray-300 hover:text-white">
                    Solutions
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
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
              <button className="text-gray-300 hover:text-white">
                <Sun className="h-5 w-5" />
              </button>
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
              <button className="md:hidden text-gray-300 hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-36 pb-24 md:pt-44 md:pb-32">

          <div className="container mx-auto px-4 text-center">
            <motion.div className="mb-8 flex justify-center" initial="hidden" animate="visible" variants={fadeIn}>
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#333] bg-[#1a1a2e] shadow-md">
                <div className="grid grid-cols-2 gap-0.5 mr-2">
                  <div className="w-2 h-2 bg-blue-500" />
                  <div className="w-2 h-2 bg-green-500" />
                  <div className="w-2 h-2 bg-red-500" />
                  <div className="w-2 h-2 bg-yellow-500" />
                </div>
                <span className="text-sm text-gray-300">Member of Microsoft Startup Founders Hub</span>
              </div>
            </motion.div>


            <motion.h1
              className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              Build Powerful AI Applications
              <br />
              With{" "}
              <span className="px-4 py-2 rounded-md border-2 border-dashed border-indigo-500 bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text shadow-lg">
                Seamless Integrations
              </span>
            </motion.h1>


            <motion.p
              className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              Enterprise Grade <span className="text-white font-medium">AI Platform</span> with Complete Solution for{" "}
              <span className="text-white font-medium">AI Integrations</span>.
            </motion.p>

            <motion.div
              className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-6 rounded-md flex items-center">
                Try KidJig API
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-gray-700 text-gray-300 hover:text-white px-6 py-6 rounded-md">
                Read the Docs
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-6xl mx-auto bg-[#0c0c2a] p-8 md:p-12 rounded-xl border border-indigo-900/50"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <span className="text-yellow-400 text-2xl mr-2">👋</span>
                    <h2 className="text-3xl font-bold">Hi Shubh, Welcome to Kidjig</h2>
                  </div>
                  <p className="text-gray-400 mb-6">
                    Unify, secure, and scale your Enterprise AI infrastructure. A single platform to accessing and
                    managing multiple AI providers with enterprise-grade security.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md flex items-center">
                      Generate API Key
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gray-700 text-gray-300 hover:text-white px-6 py-2 rounded-md"
                    >
                      Read the Docs
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gray-700 text-gray-300 hover:text-white px-6 py-2 rounded-md"
                    >
                      Join Community
                    </Button>
                  </div>
                </div>
                <div className="bg-[#0a0a20] rounded-lg p-6 border border-indigo-900/30">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-indigo-600 p-2 rounded-lg">
                      <Rocket className="h-5 w-5" />
                    </div>
                    <div className="text-xs text-gray-500">const axios = require('axios');</div>
                  </div>
                  <div className="font-mono text-sm text-gray-300 space-y-2">
                    <div>
                      <span className="text-purple-400">// First, set your API key</span>
                    </div>
                    <div>
                      <span className="text-blue-400">const</span> <span className="text-green-400">baseUrl</span> ={" "}
                      <span className="text-yellow-400">'https://api.kidjig.com/provider';</span>
                    </div>
                    <div>
                      <span className="text-blue-400">const</span> <span className="text-green-400">apiKey</span> ={" "}
                      <span className="text-yellow-400">'YOUR_API_KEY';</span>
                    </div>
                    <div>&nbsp;</div>
                    <div>
                      <span className="text-purple-400">// Example: Chat completion with GPT-3.5</span>
                    </div>
                    <div>
                      <span className="text-blue-400">const</span> <span className="text-green-400">response</span> ={" "}
                      <span className="text-blue-400">await</span> axios.post(
                    </div>
                    <div>
                      &nbsp;&nbsp;<span className="text-yellow-400">{"`${baseUrl}/chat/completions`"}</span>,
                    </div>
                    <div>&nbsp;&nbsp;{"{"}</div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;prompt:{" "}
                      <span className="text-yellow-400">"What is the capital of France?"</span>,
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;stream: <span className="text-blue-400">false</span>,
                    </div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;config: {"{"}</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;temperature: 0.7,</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maxOutputTokens: 1000,</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</div>
                    <div>&nbsp;&nbsp;{"}"},</div>
                    <div>&nbsp;&nbsp;{"{"}</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;headers: {"{"}</div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Authorization:{" "}
                      <span className="text-yellow-400">{"`Bearer ${apiKey}`"}</span>
                    </div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</div>
                    <div>&nbsp;&nbsp;{"}"}</div>
                    <div>);</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Start Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Quick Start
            </motion.h2>

            <motion.div
              className="grid md:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div className="bg-[#0c0c2a] p-6 rounded-xl border border-indigo-900/50" variants={fadeIn}>
                <div className="bg-indigo-600 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Generate API Key</h3>
                <p className="text-gray-400">Generate your API key from the API Keys section in your dashboard</p>
              </motion.div>

              <motion.div className="bg-[#0c0c2a] p-6 rounded-xl border border-indigo-900/50" variants={fadeIn}>
                <div className="bg-indigo-600 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. Make API Calls</h3>
                <p className="text-gray-400">Use your API key to authenticate and start making API calls</p>
              </motion.div>

              <motion.div className="bg-[#0c0c2a] p-6 rounded-xl border border-indigo-900/50" variants={fadeIn}>
                <div className="bg-indigo-600 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Integrate with Open AI Client</h3>
                <p className="text-gray-400">Easily integrate with OpenAI's client by using your API key.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Enterprise Level AI Gateway */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Experience Enterprise Level
            </motion.h2>
            <motion.div
              className="inline-block"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <span className="text-indigo-400 border border-dashed border-indigo-400 px-4 py-2 rounded-lg text-4xl md:text-5xl font-bold">
                AI Application Gateway
              </span>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-2 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {/* Feature 1 */}
              <motion.div className="bg-[#0c0c2a] p-8 rounded-xl border border-indigo-900/50" variants={fadeIn}>
                <div className="bg-indigo-600 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Highly Scalable Usage</h3>
                <p className="text-gray-400">
                  Easily Scale your enterprise AI infrastructure through our single, powerful gateway
                </p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div className="bg-[#0c0c2a] p-8 rounded-xl border border-indigo-900/50" variants={fadeIn}>
                <div className="bg-indigo-600 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Secure AI Infrastructure</h3>
                <p className="text-gray-400">
                  Unify and Secure your enterprise AI infrastructure through our single, powerful gateway.
                </p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div className="bg-[#0c0c2a] p-8 rounded-xl border border-indigo-900/50" variants={fadeIn}>
                <div className="bg-indigo-600 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Manage Multiple LLM Providers</h3>
                <p className="text-gray-400">
                  Access and manage multiple AI providers with Enterprise-grade secure environment.
                </p>
              </motion.div>

              {/* Feature 4 */}
              <motion.div className="bg-[#0c0c2a] p-8 rounded-xl border border-indigo-900/50" variants={fadeIn}>
                <div className="bg-indigo-600 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Fast Integration</h3>
                <p className="text-gray-400">
                  Designed for simplicity, allowing you to integrate AI capabilities into your applications in just
                  minutes.
                </p>
              </motion.div>

              {/* Feature 5 */}
              <motion.div className="bg-[#0c0c2a] p-8 rounded-xl border border-indigo-900/50" variants={fadeIn}>
                <div className="bg-indigo-600 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Real-time Analytics</h3>
                <p className="text-gray-400">
                  Real-time analytics, giving you instant insights into AI interactions at ease.
                </p>
              </motion.div>

              {/* Feature 6 */}
              <motion.div className="bg-[#0c0c2a] p-8 rounded-xl border border-indigo-900/50" variants={fadeIn}>
                <div className="bg-indigo-600 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">24/7 Hours Support</h3>
                <p className="text-gray-400">
                  We at Kidjig try our best to fix you issues as early as possible. We provide extensive support.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-12 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md flex items-center mx-auto">
                Try KidJig Platform
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* AI Models Integration */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid md:grid-cols-2 gap-8 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-indigo-400">Multiple</span>
                  <br />
                  Models
                </h2>
                <p className="text-gray-400 mb-6">
                  Kidjig Chat offers a seamless interface allowing you to engage with your Favorite AI models.
                </p>
              </motion.div>

              <motion.div className="bg-[#0c0c2a] p-6 rounded-xl border border-indigo-900/50" variants={fadeIn}>
                <div className="relative">
                  <div className="flex justify-center">
                    <div className="bg-black p-3 rounded-full border-2 border-indigo-600 z-10 relative">
                      <div className="h-10 w-10 bg-indigo-600 flex items-center justify-center rounded">
                        <span className="text-white font-bold">K</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-around mt-8">
                    <div className="bg-white p-2 rounded-full">
                      <div className="h-8 w-8 flex items-center justify-center rounded">
                        <span className="text-orange-500 font-bold">M</span>
                      </div>
                    </div>

                    <div className="bg-white p-2 rounded-full">
                      <div className="h-8 w-8 flex items-center justify-center rounded">
                        <span className="text-gray-800 font-bold">S</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-around mt-8">
                    <div className="bg-white p-2 rounded-full">
                      <div className="h-8 w-8 flex items-center justify-center rounded">
                        <span className="text-blue-500 font-bold">G</span>
                      </div>
                    </div>

                    <div className="bg-white p-2 rounded-full">
                      <div className="h-8 w-8 flex items-center justify-center rounded">
                        <span className="text-blue-800 font-bold">∞</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-around mt-8">
                    <div className="bg-white p-2 rounded-full">
                      <div className="h-8 w-8 flex items-center justify-center rounded">
                        <span className="text-blue-600 font-bold">A</span>
                      </div>
                    </div>
                  </div>

                  {/* Connection lines */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 300 300">
                      <path d="M150,50 L100,120" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="1" fill="none" />
                      <path d="M150,50 L200,120" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="1" fill="none" />
                      <path d="M150,50 L80,200" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="1" fill="none" />
                      <path d="M150,50 L220,200" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="1" fill="none" />
                      <path d="M150,50 L150,250" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="1" fill="none" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Other Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 text-center text-indigo-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Other Products
            </motion.h2>
            <motion.p
              className="text-center text-gray-400 mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Our enterprise-grade chat platform powered with Multiple AI models
            </motion.p>

            <motion.div
              className="max-w-4xl mx-auto bg-[#0c0c2a] p-8 rounded-xl border border-indigo-900/50 mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="flex justify-center mb-4">
                <span className="bg-indigo-900/50 text-indigo-300 text-sm px-4 py-1 rounded-full">
                  🚀 Just Launched! 🚀
                </span>
              </div>

              <h3 className="text-3xl font-bold text-center mb-4">
                Experience the <span className="text-indigo-400">Next Generation</span> of AI Chat
              </h3>

              <p className="text-center text-gray-400 mb-8">
                One platform, multiple AI models, endless possibilities. Switch between models in real-time for the
                perfect conversation.
              </p>

              <div className="flex justify-center space-x-4 mb-8">
                <span className="bg-gray-800 text-white text-sm px-4 py-1 rounded-full">GPT-4o</span>
                <span className="bg-gray-800 text-white text-sm px-4 py-1 rounded-full">Claude</span>
                <span className="bg-gray-800 text-white text-sm px-4 py-1 rounded-full">Gemini</span>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[#080818] p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <MessageSquare className="h-5 w-5 text-indigo-400 mr-2" />
                    <h4 className="font-bold">Multi-Model Chat</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    Switch between GPT-4o, Claude, and more in real-time for diverse perspectives
                  </p>
                </div>

                <div className="bg-[#080818] p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Settings className="h-5 w-5 text-indigo-400 mr-2" />
                    <h4 className="font-bold">AI Creation Studio</h4>
                  </div>
                  <p className="text-sm text-gray-400">Generate images and creative content with state-of-the-art AI</p>
                </div>

                <div className="bg-[#080818] p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Server className="h-5 w-5 text-indigo-400 mr-2" />
                    <h4 className="font-bold">Research Assistant</h4>
                  </div>
                  <p className="text-sm text-gray-400">Summarize YouTube videos and search the web intelligently</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Image Generation */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid md:grid-cols-2 gap-8 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="AI Chat Interface"
                  width={600}
                  height={400}
                  className="rounded-xl border border-indigo-900/50"
                />
              </motion.div>

              <motion.div variants={fadeIn}>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Image</h2>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-400">Generation</h2>
                <p className="text-gray-400 mb-6">
                  Create stunning visuals by simply providing prompts, selecting styles, and customize details to match
                  your vision.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Quick Start Prompts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid md:grid-cols-2 gap-8 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Quick Start</h2>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-400">Prompts</h2>
                <p className="text-gray-400 mb-6">
                  The Quick Start Prompts offers a collection of pre-designed prompts to help you get started quickly
                  with AI-powered content generation.
                </p>
              </motion.div>

              <motion.div variants={fadeIn}>
                <div className="bg-[#0c0c2a] p-6 rounded-xl border border-indigo-900/50">
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-600 p-2 rounded-lg mr-2">
                      <Rocket className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold">Quick Start Prompts</h3>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm text-gray-400 mb-2">Writing</h4>
                    <div className="bg-[#080818] p-4 rounded-lg border border-gray-800">
                      <p className="text-sm">
                        Write a creative story about a future where AI and humans live in harmony
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-md text-lg">
                Try KidJig Platform
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 bg-indigo-600 flex items-center justify-center rounded">
                  <span className="text-white font-bold">K</span>
                </div>
                <span className="text-xl font-bold">Kidjig</span>
              </div>
              <p className="text-gray-400 mb-4">Enterprise-grade AI platform for seamless integrations</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    AI Platform
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    API Integration
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    AI Chat
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Image Generation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} KidJig. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
