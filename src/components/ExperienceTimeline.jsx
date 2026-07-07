import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { experiences } from '../data/placeholder'
import TimelineItem from './TimelineItem'

export default function ExperienceTimeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div ref={ref} className="relative">
      {/* Center line (desktop only) */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-px">
        <div className="absolute inset-0 bg-white/[0.04]" />
        <motion.div
          style={{ scaleY, transformOrigin: 'top' }}
          className="absolute inset-0 bg-gradient-to-b from-teal-400 via-teal-400/50 to-transparent origin-top"
        />
      </div>

      {/* Mobile line */}
      <div className="md:hidden absolute left-[19px] top-0 bottom-0 w-px">
        <div className="absolute inset-0 bg-white/[0.04]" />
      </div>

      {/* Timeline Items */}
      <div className="relative space-y-12 md:space-y-0">
        {experiences.map((exp, index) => (
          <TimelineItem
            key={exp.id}
            experience={exp}
            index={index}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  )
}
