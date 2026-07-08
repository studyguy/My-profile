import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import BorderGlow from './BorderGlow'

export default function ProjectCard({ project, index }) {
  const { title, category, description, achievements, gradient, icon: Icon, slug, role } = project

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
    >
      <Link
        to={`/project/${slug}`}
        className="group h-full flex flex-col"
      >
        {/* Cover Image — outside BorderGlow so glow doesn't get blocked */}
        <div className={`relative h-48 bg-gradient-to-br ${gradient} overflow-hidden rounded-t-2xl`}>
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
          <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/5" />
          <div className="absolute bottom-4 right-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <Icon size={22} className="text-white/80" />
            </div>
          </div>
          <div className="absolute top-4 left-4">
            <span className="px-2.5 py-1 rounded-md bg-black/20 backdrop-blur-sm text-white/80 text-xs font-medium">
              {role}
            </span>
          </div>
        </div>

        {/* Content — wrapped in BorderGlow */}
        <BorderGlow
          glowColor="170 70 50"
          backgroundColor="rgb(15 15 18)"
          borderRadius={0}
          glowRadius={24}
          glowIntensity={0.8}
          coneSpread={20}
          edgeSensitivity={25}
          colors={['#2dd4bf', '#a78bfa', '#0d9488']}
          fillOpacity={0.3}
          className="flex-1 flex flex-col rounded-b-2xl"
        >
          <div className="p-6 flex flex-col flex-1 relative">
            <span className="inline-block self-start px-2.5 py-1 rounded-md bg-teal-400/10 text-teal-400 text-xs font-medium tracking-wider mb-3">
              {category}
            </span>

            <h3 className="text-lg font-bold text-zinc-100 mb-2 group-hover:text-teal-400 transition-colors">
              {title}
            </h3>

            <p className="text-sm text-zinc-400 leading-relaxed mb-5 flex-1">
              {description}
            </p>

            {achievements && (
              <div className="flex gap-6 pt-4 border-t border-white/[0.06]">
                {achievements.map((ach, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-xl font-bold text-zinc-100 tabular-nums">{ach.value}</span>
                    <span className="text-xs text-zinc-500 mt-0.5">{ach.label}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <ArrowUpRight size={14} className="text-white/60" />
              </div>
            </div>
          </div>
        </BorderGlow>
      </Link>
    </motion.div>
  )
}
