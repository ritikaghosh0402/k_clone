"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowRight,
  ChevronDown,
  Clock,
  Database,
  LineChart,
  Settings,
  Shield,
  Code,
  Layers,
  Zap,
  Cog,
  Building,
  Wrench,
  DiscIcon as Discord,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedBeam } from "@/components/animated-beam"
import { FeatureCard } from "@/components/feature-card"
import { FAQAccordion } from "@/components/faq-accordion"
import { ImageHoverCard } from "@/components/image-hover-card"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

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

  const faqItems = [
    {
      question: "What is KidJig Tech? What is it about?",
      answer:
        "KidJig Tech is an AI-first company specializing in building professional digital solutions. We focus on leveraging Artificial Intelligence, Web3, and Blockchain technologies to create innovative software solutions that make a lasting impression and solve real-world challenges.",
    },
    {
      question: "What services does KidJig provide?",
      answer:
        "KidJig offers a range of services including Web Development, Software Development, App Development, and Consultancy. We use AI technologies to build efficient software solutions tailored to our clients' needs.",
    },
    {
      question: "What is KidJig's main focus?",
      answer:
        "KidJig's main focus is on empowering lives through innovative AI technologies. We aim to harness the latest advancements in tech to solve real-world challenges and enhance everyday experiences.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary depending on the complexity and scope of the work. We follow a structured process including Discovery and Research, Concept Development, Design and Refinement, and Finalisation and Delivery. We work closely with our clients to ensure timely delivery of high-quality solutions.",
    },
    {
      question: "What sets KidJig apart from other tech companies?",
      answer:
        "KidJig stands out due to our AI-first approach, our focus on innovative technologies like Web3 and Blockchain, and our commitment to creating human-centric solutions. With over 16 years of experience in IT, our founder has instilled a passion for leveraging cutting-edge technologies to create meaningful and positive impact.",
    },
    {
      question: "Is KidJig only focused on AI?",
      answer:
        "While AI is a core focus, KidJig also specializes in other emerging technologies such as Web3 and Blockchain. We provide a range of services including web, software, and app development, as well as consultancy.",
    },
    {
      question: "Does KidJig offer consulting services?",
      answer:
        "Yes, KidJig offers consultancy services as part of our range of offerings. We can provide expert advice and guidance on leveraging AI and other innovative technologies for your business needs.",
    },
    {
      question: "How does KidJig ensure the ethical use of AI?",
      answer:
        "At KidJig, we are committed to developing AI solutions that are innovative and human-centered. We follow strict ethical guidelines and industry best practices to ensure our AI solutions are transparent, fair, and respect user privacy.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#080818] via-[#0c0c1c] to-[#0c0c1c] text-white">
      {/* Fixed Navbar */}

      <header className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl rounded-xl border border-white/10 px-6 py-4 transition-all duration-300 ${scrolled ? "bg-black/60 backdrop-blur-xl" : "bg-black/40 backdrop-blur-md"}`}>

        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-indigo-600 flex items-center justify-center rounded">
                  <span className="text-white font-bold">K</span>
                </div>
                <span className="text-xl font-bold">Kidjig</span>
              </Link>

              <nav className="hidden md:flex items-center space-x-8">
                <div className="relative group">
                  <button className="flex items-center text-gray-300 hover:text-indigo-400">
                    Products
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
                <div className="relative group">
                  <button className="flex items-center text-gray-300 hover:text-indigo-400">
                    Solutions
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
                <Link href="#" className="text-gray-300 hover:text-indigo-400">
                  Pricing
                </Link>
                <Link href="#" className="text-gray-300 hover:text-indigo-400">
                  FAQ
                </Link>
                <Link href="#" className="text-gray-300 hover:text-indigo-400">
                  ContactUs
                </Link>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <ThemeToggle />

              <Link
                href="#"
                className="hidden md:block text-gray-300 hover:text-white px-4 py-2 rounded-md border border-gray-700">
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
              className="text-4xl md:text-6xl font-bold mb-10 leading-tight"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              Build Powerful AI Applications
              <br />
              With{" "}
              <span className="bg-gradient-to-br from-[#dfdde3] to-[#8b63f1] text-transparent bg-clip-text font-extrabold text-outline border-4 border-dashed border-indigo-400 px-6 py-3 rounded-xl shadow-inner">
                Seamless Integrations
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto"
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

        {/* Welcome and Quick Start Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <Image
                src="/images/Final_home.png"
                alt="KidJig Dashboard"
                width={1200}
                height={800}
                className="w-full h-auto rounded-xl border border-indigo-900/50 shadow-xl"
              />
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
              <motion.div variants={fadeIn}>
                <FeatureCard
                  icon={LineChart}
                  title="Highly Scalable Usage"
                  description="Easily Scale your enterprise AI infrastructure through our single, powerful gateway"
                />
              </motion.div>

              {/* Feature 2 */}
              <motion.div variants={fadeIn}>
                <FeatureCard
                  icon={Shield}
                  title="Secure AI Infrastructure"
                  description="Unify and Secure your enterprise AI infrastructure through our single, powerful gateway."
                />
              </motion.div>

              {/* Feature 3 */}
              <motion.div variants={fadeIn}>
                <FeatureCard
                  icon={Database}
                  title="Manage Multiple LLM Providers"
                  description="Access and manage multiple AI providers with Enterprise-grade secure environment."
                />
              </motion.div>

              {/* Feature 4 */}
              <motion.div variants={fadeIn}>
                <FeatureCard
                  icon={Settings}
                  title="Fast Integration"
                  description="Designed for simplicity, allowing you to integrate AI capabilities into your applications in just minutes."
                />
              </motion.div>

              {/* Feature 5 */}
              <motion.div variants={fadeIn}>
                <FeatureCard
                  icon={LineChart}
                  title="Real-time Analytics"
                  description="Real-time analytics, giving you instant insights into AI interactions at ease."
                />
              </motion.div>

              {/* Feature 6 */}
              <motion.div variants={fadeIn}>
                <FeatureCard
                  icon={Clock}
                  title="24/7 Hours Support"
                  description="We at Kidjig try our best to fix you issues as early as possible. We provide extensive support."
                />
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
              className="text-6xl md:text-7xl font-bold mb-4 text-center text-indigo-300"
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
              className="max-w-4xl mx-auto mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Image
                src="/images/other_products.png"
                alt="KidJig Products"
                width={1000}
                height={600}
                className="w-full h-auto rounded-xl border border-indigo-900/50 shadow-xl"
              />
            </motion.div>
          </div>
        </section>

        {/* Image Generation */}
        <ImageHoverCard
          title="Image Generation"
          description="Create stunning visuals by simply providing prompts, selecting styles, and customize details to match your vision."
          imageSrc="/images/model_pic1.png"
          imageAlt="AI Image Generation Interface"
        />

        {/* Multiple Models */}
        <ImageHoverCard
          title="Multiple Models"
          description="Access a wide range of AI models through our unified platform. Switch between models seamlessly to find the perfect solution for your needs."
          imageSrc="/images/model_pic2.png"
          imageAlt="AI Models Interface"
          imageOnRight={true}
        />

        {/* Quick Start Prompts */}
        <ImageHoverCard
          title="Quick Start Prompts"
          description="The Quick Start Prompts offers a collection of pre-designed prompts to help you get started quickly with AI-powered content generation."
          imageSrc="/images/model_pic3.png"
          imageAlt="Quick Start Prompts Interface"
        />

        {/* Why Choose Us Section */}
        <section className="py-16 bg-[#080818]">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us?</h2>
              <p className="text-gray-400 max-w-3xl mx-auto">
                We combine technical expertise with innovative solutions to deliver a
                <span className="text-white font-medium"> Comprehensive AI platform that grows with your needs.</span>
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}>
                <AnimatedBeam className="h-full">
                  <div className="bg-indigo-600 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Code className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Technical Excellence</h3>
                  <p className="text-gray-400">
                    10+ Years of Experience. Focus on Building Quality Products with cutting-edge AI technology and
                    robust infrastructure.
                  </p>
                </AnimatedBeam>
              </motion.div>

              <motion.div variants={fadeIn}>
                <AnimatedBeam className="h-full">
                  <div className="bg-indigo-600 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Layers className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Comprehensive Suite</h3>
                  <p className="text-gray-400">
                    From Image generation, Multiple LLM Models to AI Agents, get all the tools you need under one single
                    platform.
                  </p>
                </AnimatedBeam>
              </motion.div>

              <motion.div variants={fadeIn}>
                <AnimatedBeam className="h-full">
                  <div className="bg-indigo-600 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Unified Platform</h3>
                  <p className="text-gray-400">
                    Single Platform to manage multiple AI models. Seamless integration and consistent experience.
                  </p>
                </AnimatedBeam>
              </motion.div>

              <motion.div variants={fadeIn}>
                <AnimatedBeam className="h-full">
                  <div className="bg-indigo-600 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Cog className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Advanced AI Integration</h3>
                  <p className="text-gray-400">
                    Access to the Advanced and Latest AI models and technologies through our unified interface.
                  </p>
                </AnimatedBeam>
              </motion.div>

              <motion.div variants={fadeIn}>
                <AnimatedBeam className="h-full">
                  <div className="bg-indigo-600 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Building className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Enterprise Ready</h3>
                  <p className="text-gray-400">
                    We build software with security, scalability, and reliability as our core principles.
                  </p>
                </AnimatedBeam>
              </motion.div>

              <motion.div variants={fadeIn}>
                <AnimatedBeam className="h-full">
                  <div className="bg-indigo-600 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Wrench className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
                  <p className="text-gray-400">
                    We provide flexible architecture that adapts to your specific use cases and requirements.
                  </p>
                </AnimatedBeam>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Begin Your AI Journey */}
        <section className="py-20 bg-gradient-to-b from-[#0c0c2a] to-[#080818]">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-5xl md:text-6xl font-bold mb-4">Begin Your</h2>
              <h2 className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
                AI Journey
              </h2>

              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md flex items-center">
                  Try KidJig API
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:text-white px-6 py-3 rounded-md"
                >
                  Read the Docs
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-[#080818]">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">FAQs</h2>
            </motion.div>

            <motion.div
              className="max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <FAQAccordion items={faqItems} />
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#080818] py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 bg-indigo-600 flex items-center justify-center rounded">
                  <span className="text-white font-bold">K</span>
                </div>
                <span className="text-xl font-bold">Kidjig</span>
              </div>
              <p className="text-gray-400 mb-6">
                Building the future of AI Products. Empowering creators and developers with powerful AI tools.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Discord className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Kidjig Chat
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Kidjig Platform
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-bold mb-4">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-[#0c0c2a] p-6 rounded-xl border border-indigo-900/50">
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 h-3 w-3 rounded-full mr-2"></div>
                <span className="text-sm text-purple-400">Public Beta</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Join our early access program</h3>
              <p className="text-gray-400 mb-4">and shape the future of AI APIs</p>
            </div>

            <div className="bg-[#0c0c2a] p-6 rounded-xl border border-indigo-900/50">
              <div className="flex items-center space-x-2 mb-4">
                <Discord className="h-5 w-5 text-indigo-400" />
                <h3 className="text-lg font-medium">Join our Discord Community</h3>
              </div>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white w-full">Join Discord</Button>
            </div>
          </div>

          <div className="mt-16 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2025 Kidjig. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <span className="bg-purple-900/50 text-purple-400 text-xs px-3 py-1 rounded-full">Now in Beta</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
