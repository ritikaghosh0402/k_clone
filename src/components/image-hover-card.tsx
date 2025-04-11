"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ImageHoverCardProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  className?: string
  imageOnRight?: boolean
}

export function ImageHoverCard({
  title,
  description,
  imageSrc,
  imageAlt,
  className,
  imageOnRight = false,
}: ImageHoverCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn("grid md:grid-cols-2 gap-8 items-center py-12", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!imageOnRight ? (
        <>
          <motion.div
            animate={{
              scale: isHovered ? 1.05 : 1,
              y: isHovered ? -5 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-xl border border-indigo-900/50"
          >
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-500"
            />
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent"
              />
            )}
          </motion.div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{title.split(" ")[0]}</h2>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-400">
              {title.split(" ").slice(1).join(" ")}
            </h2>
            <p className="text-gray-400 mb-6">{description}</p>
          </div>
        </>
      ) : (
        <>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{title.split(" ")[0]}</h2>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-400">
              {title.split(" ").slice(1).join(" ")}
            </h2>
            <p className="text-gray-400 mb-6">{description}</p>
          </div>
          <motion.div
            animate={{
              scale: isHovered ? 1.05 : 1,
              y: isHovered ? -5 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-xl border border-indigo-900/50"
          >
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-500"
            />
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent"
              />
            )}
          </motion.div>
        </>
      )}
    </div>
  )
}
