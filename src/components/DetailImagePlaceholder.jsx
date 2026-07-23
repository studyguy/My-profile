import { useState } from 'react'
import { motion } from 'framer-motion'
import { Image } from 'lucide-react'

export default function DetailImagePlaceholder({ src, label = '产品截图预留区域', className = '' }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div
      className={`relative rounded-2xl overflow-hidden border border-white/[0.06] bg-zinc-900/50 ${className}`}
    >
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute inset-0 dot-bg opacity-5" />

      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-teal-500/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-violet-500/3 rounded-full blur-3xl" />

      {src ? (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 animate-pulse">
              <div className="w-14 h-14 rounded-2xl bg-white/[0.04] flex items-center justify-center">
                <Image size={24} className="text-zinc-600" />
              </div>
              <span className="text-xs text-zinc-600 tracking-wider">{label}</span>
            </div>
          )}

          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, filter: 'blur(8px)' }}
            animate={{
              opacity: isLoaded ? 1 : 0,
              filter: isLoaded ? 'blur(0px)' : 'blur(8px)'
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <img
              src={src}
              className="w-full h-full object-cover"
              onLoad={() => setIsLoaded(true)}
            />
          </motion.div>
        </>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-white/[0.04] flex items-center justify-center">
            <Image size={24} className="text-zinc-600" />
          </div>
          <span className="text-xs text-zinc-600 tracking-wider">{label}</span>
        </div>
      )}

      <div className="absolute top-4 left-4 w-8 h-px bg-white/[0.04]" />
      <div className="absolute top-4 left-4 w-px h-8 bg-white/[0.04]" />
      <div className="absolute bottom-4 right-4 w-8 h-px bg-white/[0.04]" />
      <div className="absolute bottom-4 right-4 w-px h-8 bg-white/[0.04]" />
    </div>
  )
}
