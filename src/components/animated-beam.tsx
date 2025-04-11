"use client"

import { useRef, useState, useEffect } from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import type { ReactNode, MouseEvent } from "react"
import { cn } from "@/lib/utils"

interface AnimatedBeamProps extends HTMLMotionProps<"div"> {
  children: ReactNode
  className?: string
}

export function AnimatedBeam({ children, className, ...props }: AnimatedBeamProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = divRef.current?.getBoundingClientRect()
    if (!rect) return

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("relative overflow-hidden rounded-xl border border-indigo-900/50 bg-[#0c0c2a] p-8", className)}
      {...props}
    >
      {isMounted && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`,
          }}
        />
      )}
      {children}
    </motion.div>
  )
}
