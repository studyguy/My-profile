import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function TimelineItem({ experience, index, isLeft }) {
  const { period, company, companyShort, role, description, achievements, slug } = experience

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className={`relative md:w-1/2 md:py-8 ${
        isLeft ? 'md:pr-16 md:ml-0 md:mr-auto' : 'md:pl-16 md:ml-auto md:mr-0'
      }`}
    >
      {/* Dot */}
      <div
        className={`hidden md:flex absolute top-12 w-4 h-4 rounded-full bg-teal-400 shadow-lg shadow-teal-400/30 z-10 ${
          isLeft ? '-right-2' : '-left-2'
        }`}
      >
        <div className="absolute inset-0 rounded-full bg-teal-400 animate-ping opacity-20" />
      </div>

      {/* Card wrapped in Link */}
      <Link to={`/experience/${slug}`} className="group relative ml-10 md:ml-0 block">
        {/* Mobile dot */}
        <div className="md:hidden absolute -left-[28px] top-2 w-3 h-3 rounded-full bg-teal-400 shadow-lg shadow-teal-400/30" />

        <div className="glass rounded-2xl p-6 md:p-8 card-hover relative overflow-hidden">
          {/* Period badge */}
          <span className="inline-block px-3 py-1 rounded-full bg-teal-400/10 text-teal-400 text-xs font-medium tracking-wider mb-4">
            {period}
          </span>

          {/* Company & Role */}
          <h3 className="text-xl md:text-2xl font-bold text-zinc-100 mb-1 group-hover:text-teal-400 transition-colors">
            {role}
          </h3>
          <p className="text-teal-400 font-medium mb-4">{companyShort || company}</p>

          {/* Description */}
          <p className="text-zinc-400 leading-relaxed mb-5 text-sm md:text-base">
            {description}
          </p>

          {/* Achievements */}
          {achievements && (
            <div className="flex gap-4 pt-4 border-t border-white/[0.06]">
              {achievements.slice(0, 2).map((ach, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-lg font-bold text-zinc-100 tabular-nums">{ach.value}</span>
                  <span className="text-xs text-zinc-500">{ach.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Hover arrow indicator */}
          <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            <div className="w-7 h-7 rounded-full bg-teal-400/10 flex items-center justify-center">
              <ArrowRight size={12} className="text-teal-400" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
