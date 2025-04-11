import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"
import { AnimatedBeam } from "@/components/animated-beam"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <AnimatedBeam className={cn("h-full", className)}>
      <div className="bg-indigo-600 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </AnimatedBeam>
  )
}
