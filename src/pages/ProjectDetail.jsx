<<<<<<< HEAD
import { useEffect, useState } from 'react'
=======
import { useEffect } from 'react'
>>>>>>> c3afca1 (Initial commit: 杨镕键个人作品集网站)
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Wrench, Award, ChevronLeft, ChevronRight } from 'lucide-react'
import { projects } from '../data/placeholder'
import BlurText from '../components/BlurText'
import DetailImagePlaceholder from '../components/DetailImagePlaceholder'

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
<<<<<<< HEAD
  const [scrolled, setScrolled] = useState(false)
=======
>>>>>>> c3afca1 (Initial commit: 杨镕键个人作品集网站)
  const project = projects.find(p => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

<<<<<<< HEAD
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

=======
>>>>>>> c3afca1 (Initial commit: 杨镕键个人作品集网站)
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950">
        <div className="text-center">
          <p className="text-zinc-400 mb-4">未找到该项目</p>
          <Link to="/" className="text-teal-400 hover:text-teal-300 transition-colors">
            返回首页
          </Link>
        </div>
      </div>
    )
  }

  const currentIndex = projects.findIndex(p => p.slug === slug)
  const prevProj = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProj = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  const Icon = project.icon

  return (
<<<<<<< HEAD
    <div className="min-h-screen">
      {/* Top Bar */}
      <div
        className={`sticky top-0 z-40 border-b transition-colors duration-700 ${
          scrolled
            ? 'bg-zinc-950/70 backdrop-blur-xl border-white/[0.06]'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className={`flex items-center gap-2 transition-colors text-sm ${
              scrolled ? 'text-zinc-400 hover:text-zinc-100' : 'text-zinc-300 hover:text-zinc-100'
            }`}
=======
    <div className="min-h-screen bg-zinc-950">
      {/* Top Bar */}
      <div className="sticky top-0 z-40 glass-strong border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors text-sm"
>>>>>>> c3afca1 (Initial commit: 杨镕键个人作品集网站)
          >
            <ArrowLeft size={16} />
            返回首页
          </button>
<<<<<<< HEAD
          <span className={`text-xs transition-colors duration-700 truncate max-w-[200px] ${
            scrolled ? 'text-zinc-600' : 'text-zinc-500'
          }`}>{project.title}</span>
=======
          <span className="text-xs text-zinc-600 truncate max-w-[200px]">{project.title}</span>
>>>>>>> c3afca1 (Initial commit: 杨镕键个人作品集网站)
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Tags + Period */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-teal-400/10 text-teal-400 text-xs font-medium">
              {project.category}
            </span>
<<<<<<< HEAD
            <div className="flex items-center gap-1.5 text-zinc-200 text-xs">
=======
            <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
>>>>>>> c3afca1 (Initial commit: 杨镕键个人作品集网站)
              <Calendar size={12} />
              {project.period}
            </div>
            <span className="px-3 py-1 rounded-full bg-violet-400/10 text-violet-400 text-xs font-medium">
              {project.role}
            </span>
          </div>

          {/* Title */}
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

          {/* Description */}
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mb-6">
            {project.description}
          </p>

          {/* Tech Stack Tags */}
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

        {/* Main Image Placeholder */}
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

        {/* Detail Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-10 mb-14"
        >
          {project.detailContent.map((section, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold text-teal-400 mb-4 flex items-center gap-2">
                <span className="w-1 h-4 rounded-full bg-teal-400" />
                {section.title}
              </h3>
              {section.type === 'overview' && (
                <p className="text-zinc-300 leading-relaxed">{section.content}</p>
              )}
              {section.type === 'list' && (
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-zinc-300 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-400/50 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </motion.div>

        {/* Secondary Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <DetailImagePlaceholder label="产品截图预留区" className="aspect-[4/3]" />
          <DetailImagePlaceholder label="产品截图预留区" className="aspect-[4/3]" />
        </motion.div>

        {/* Achievements Grid */}
        {project.achievements.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-teal-400 mb-6 flex items-center gap-2">
              <Award size={18} />
              项目亮点
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.achievements.map((ach, i) => (
                <div key={i} className="glass rounded-xl p-5">
                  <p className="text-2xl font-bold text-zinc-100 mb-1">{ach.value}</p>
<<<<<<< HEAD
                  <p className="text-xs text-zinc-300">{ach.label}</p>
=======
                  <p className="text-xs text-zinc-500">{ach.label}</p>
>>>>>>> c3afca1 (Initial commit: 杨镕键个人作品集网站)
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tech Stack Section */}
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

        {/* Navigation Footer */}
        <div className="mt-20 pt-8 border-t border-white/[0.06] flex items-center justify-between">
          {prevProj ? (
            <Link
              to={`/project/${prevProj.slug}`}
<<<<<<< HEAD
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-teal-400 transition-colors group"
            >
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <span className="block text-xs text-zinc-500">{prevProj.category}</span>
=======
              className="flex items-center gap-2 text-sm text-zinc-500 hover:text-teal-400 transition-colors group"
            >
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <span className="block text-xs text-zinc-600">{prevProj.category}</span>
>>>>>>> c3afca1 (Initial commit: 杨镕键个人作品集网站)
                <span>{prevProj.title}</span>
              </div>
            </Link>
          ) : <div />}

          {nextProj ? (
            <Link
              to={`/project/${nextProj.slug}`}
<<<<<<< HEAD
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-teal-400 transition-colors group"
=======
              className="flex items-center gap-2 text-sm text-zinc-500 hover:text-teal-400 transition-colors group"
>>>>>>> c3afca1 (Initial commit: 杨镕键个人作品集网站)
            >
              <div className="text-right">
                <span className="block text-xs text-zinc-600">{nextProj.category}</span>
                <span>{nextProj.title}</span>
              </div>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  )
}
