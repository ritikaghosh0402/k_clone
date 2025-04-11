export default function MicrosoftBadge() {
  return (
    <div className="inline-flex items-center px-4 py-2 rounded-lg bg-black/50 border border-white/10 shadow-inner backdrop-blur-sm">
      <div className="grid grid-cols-2 gap-0.5 mr-2">
        <div className="w-2 h-2 bg-blue-500"></div>
        <div className="w-2 h-2 bg-green-500"></div>
        <div className="w-2 h-2 bg-red-500"></div>
        <div className="w-2 h-2 bg-yellow-500"></div>
      </div>
      <span className="text-sm text-gray-300">Member of Microsoft Startup Founders Hub</span>
    </div>
  )
}
