import { motion, useInView } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

export default function SkillCard({ skill, index }) {
  const { title, description, icon: Icon, level } = skill
  const [displayLevel, setDisplayLevel] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!isInView) return

    const delay = (0.3 + index * 0.1) * 1000
    let animationId

    const timeoutId = setTimeout(() => {
      const startTime = performance.now()
      const duration = 1000

      function animate(currentTime) {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 2)

        setDisplayLevel(Math.round(eased * level))

        if (progress < 1) {
          animationId = requestAnimationFrame(animate)
        }
      }

      animationId = requestAnimationFrame(animate)
    }, delay)

    return () => {
      clearTimeout(timeoutId)
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [isInView, level, index])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      <div className="glass rounded-2xl p-6 md:p-7 card-hover group">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-teal-400/10 flex items-center justify-center mb-5 group-hover:bg-teal-400/15 transition-colors duration-500">
          <Icon size={22} className="text-teal-400" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-zinc-100 mb-2 group-hover:text-teal-400 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-zinc-400 leading-relaxed mb-5">
          {description}
        </p>

        {/* Skill Level Bar */}
        <div className="relative h-1 bg-white/[0.04] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-teal-400 to-teal-300 rounded-full"
          />
        </div>

        {/* Percentage */}
        <div className="flex justify-end mt-2">
          <span className="text-xs text-zinc-600 font-mono">{displayLevel}%</span>
        </div>
      </div>
    </motion.div>
  )
}
