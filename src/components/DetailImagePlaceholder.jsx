import { Image } from 'lucide-react'

export default function DetailImagePlaceholder({ label = '产品截图预留区域', className = '' }) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden border border-white/[0.06] bg-zinc-900/50 ${className}`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute inset-0 dot-bg opacity-5" />

      {/* Decorative gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-teal-500/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-violet-500/3 rounded-full blur-3xl" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <div className="w-14 h-14 rounded-2xl bg-white/[0.04] flex items-center justify-center">
          <Image size={24} className="text-zinc-600" />
        </div>
        <span className="text-xs text-zinc-600 tracking-wider">{label}</span>
      </div>

      {/* Corner accents */}
      <div className="absolute top-4 left-4 w-8 h-px bg-white/[0.04]" />
      <div className="absolute top-4 left-4 w-px h-8 bg-white/[0.04]" />
      <div className="absolute bottom-4 right-4 w-8 h-px bg-white/[0.04]" />
      <div className="absolute bottom-4 right-4 w-px h-8 bg-white/[0.04]" />
    </div>
  )
}
