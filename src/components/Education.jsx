import { motion } from 'framer-motion'
import { education } from '../data/placeholder'
import SectionWrapper from './SectionWrapper'

export default function Education() {
  const { school, degree, major, period, icon: Icon } = education

  return (
    <SectionWrapper
      id="education"
      title="教育背景"
      subtitle="科班出身，为产品之路奠定坚实基础"
    >
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="glass rounded-2xl p-8 md:p-10 card-hover max-w-lg w-full"
        >
          {/* Icon */}
          <div className="w-14 h-14 rounded-xl bg-teal-400/10 flex items-center justify-center mb-6">
            <Icon size={26} className="text-teal-400" />
          </div>

          {/* School name */}
          <h3 className="text-2xl font-bold text-zinc-100 mb-2">{school}</h3>

          {/* Degree + Major */}
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-teal-400/10 text-teal-400 text-sm font-medium">
              {degree}
            </span>
            <span className="px-3 py-1 rounded-full bg-violet-400/10 text-violet-400 text-sm font-medium">
              {major}
            </span>
          </div>

          {/* Period */}
          <p className="text-zinc-500 text-sm">{period}</p>

          {/* Decorative line */}
          <div className="mt-6 pt-6 border-t border-white/[0.06]">
            <div className="flex items-center gap-2 text-zinc-600 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400/40" />
              全日制本科
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
