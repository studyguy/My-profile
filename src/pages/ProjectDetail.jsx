import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Wrench } from 'lucide-react'
import { projects } from '../data/placeholder'
import BlurText from '../components/BlurText'
import DetailImagePlaceholder from '../components/DetailImagePlaceholder'
import DetailLayout from '../components/DetailLayout'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  return (
    <DetailLayout
      item={project}
      items={projects}
      basePath="/project/"
      topBarTitle={project?.title}
      achievementsTitle="项目亮点"
      notFoundMessage="未找到该项目"
      navSubtitle={(item) => item.category}
      navTitle={(item) => item.title}
      heroSection={
        project && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-teal-400/10 text-teal-400 text-xs font-medium">
                {project.category}
              </span>
              <div className="flex items-center gap-1.5 text-zinc-200 text-xs">
                <Calendar size={12} />
                {project.period}
              </div>
              <span className="px-3 py-1 rounded-full bg-violet-400/10 text-violet-400 text-xs font-medium">
                {project.role}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] mb-6">
              <BlurText
                text={project.title}
                delay={40}
                animateBy="letters"
                direction="top"
                stepDuration={0.35}
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]"
              />
            </h1>

            <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-xs text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )
      }
      imageSection={
        project && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-14"
            >
              <DetailImagePlaceholder
                label="产品主图预留区域"
                className="aspect-[16/9]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <DetailImagePlaceholder label="产品截图预留区" className="aspect-[4/3]" />
              <DetailImagePlaceholder label="产品截图预留区" className="aspect-[4/3]" />
            </motion.div>
          </>
        )
      }
    >
      {/* Tech Stack Section */}
      {project && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14"
        >
          <h3 className="text-lg font-semibold text-teal-400 mb-6 flex items-center gap-2">
            <Wrench size={18} />
            技术栈
          </h3>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass card-hover"
              >
                <span className="w-2 h-2 rounded-full bg-teal-400/50" />
                <span className="text-sm text-zinc-300">{tech}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </DetailLayout>
  )
}
