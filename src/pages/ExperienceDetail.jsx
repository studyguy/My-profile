import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Building2 } from 'lucide-react'
import { experiences } from '../data/placeholder'
import BlurText from '../components/BlurText'
import DetailImagePlaceholder from '../components/DetailImagePlaceholder'
import DetailLayout from '../components/DetailLayout'

export default function ExperienceDetail() {
  const { slug } = useParams()
  const experience = experiences.find(e => e.slug === slug)
  const Icon = experience?.icon

  return (
    <DetailLayout
      item={experience}
      items={experiences}
      basePath="/experience/"
      topBarTitle={experience?.companyShort || experience?.company}
      achievementsTitle="关键成果"
      notFoundMessage="未找到该经历"
      navSubtitle={(item) => item.period}
      navTitle={(item) => item.companyShort || item.company}
      heroSection={
        experience && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-teal-400/10 flex items-center justify-center">
                <Icon size={24} className="text-teal-400" />
              </div>
              <div className="flex items-center gap-2 text-zinc-200 text-sm">
                <Calendar size={14} />
                {experience.period}
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] mb-4">
              <BlurText
                text={experience.companyShort || experience.company}
                delay={40}
                animateBy="letters"
                direction="top"
                stepDuration={0.35}
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]"
              />
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <Building2 size={18} className="text-teal-400" />
              <span className="text-xl text-teal-400 font-semibold">{experience.role}</span>
            </div>

            <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mb-6">
              {experience.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {experience.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-xs text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )
      }
      imageSection={
        experience && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-14"
          >
            <DetailImagePlaceholder
              label="产品/项目截图预留区域"
              className="aspect-[21/9] md:aspect-[21/9]"
            />
          </motion.div>
        )
      }
    />
  )
}
