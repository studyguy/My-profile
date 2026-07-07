<<<<<<< HEAD
import { useEffect, useState } from 'react'
=======
import { useEffect } from 'react'
>>>>>>> c3afca1 (Initial commit: 杨镕键个人作品集网站)
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Building2, Calendar, Award, ChevronRight, ChevronLeft } from 'lucide-react'
import { experiences } from '../data/placeholder'
import BlurText from '../components/BlurText'
import DetailImagePlaceholder from '../components/DetailImagePlaceholder'

export default function ExperienceDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
<<<<<<< HEAD
  const [scrolled, setScrolled] = useState(false)
=======
>>>>>>> c3afca1 (Initial commit: 杨镕键个人作品集网站)
  const experience = experiences.find(e => e.slug === slug)

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
  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950">
        <div className="text-center">
          <p className="text-zinc-400 mb-4">未找到该经历</p>
          <Link to="/" className="text-teal-400 hover:text-teal-300 transition-colors">
            返回首页
          </Link>
        </div>
      </div>
    )
  }

  const currentIndex = experiences.findIndex(e => e.slug === slug)
  const prevExp = currentIndex > 0 ? experiences[currentIndex - 1] : null
  const nextExp = currentIndex < experiences.length - 1 ? experiences[currentIndex + 1] : null
  const Icon = experience.icon

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
          }`}>
=======
          <span className="text-xs text-zinc-600 truncate max-w-[200px]">
>>>>>>> c3afca1 (Initial commit: 杨镕键个人作品集网站)
            {experience.companyShort || experience.company}
          </span>
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
          {/* Icon + Period */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-teal-400/10 flex items-center justify-center">
              <Icon size={24} className="text-teal-400" />
            </div>
<<<<<<< HEAD
            <div className="flex items-center gap-2 text-zinc-200 text-sm">
=======
            <div className="flex items-center gap-2 text-zinc-500 text-sm">
>>>>>>> c3afca1 (Initial commit: 杨镕键个人作品集网站)
              <Calendar size={14} />
              {experience.period}
            </div>
          </div>

          {/* Title */}
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

          {/* Role */}
          <div className="flex items-center gap-3 mb-6">
            <Building2 size={18} className="text-teal-400" />
            <span className="text-xl text-teal-400 font-semibold">{experience.role}</span>
          </div>

          {/* Description */}
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mb-6">
            {experience.description}
          </p>

          {/* Tags */}
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

        {/* Image Placeholder */}
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

        {/* Detail Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-10"
        >
          {experience.detailContent.map((section, i) => (
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

        {/* Achievements Grid */}
        {experience.achievements.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14"
          >
            <h3 className="text-lg font-semibold text-teal-400 mb-6 flex items-center gap-2">
              <Award size={18} />
              关键成果
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {experience.achievements.map((ach, i) => (
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

        {/* Navigation Footer */}
        <div className="mt-20 pt-8 border-t border-white/[0.06] flex items-center justify-between">
          {prevExp ? (
            <Link
              to={`/experience/${prevExp.slug}`}
<<<<<<< HEAD
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-teal-400 transition-colors group"
            >
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <span className="block text-xs text-zinc-500">{prevExp.period}</span>
=======
              className="flex items-center gap-2 text-sm text-zinc-500 hover:text-teal-400 transition-colors group"
            >
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <span className="block text-xs text-zinc-600">{prevExp.period}</span>
>>>>>>> c3afca1 (Initial commit: 杨镕键个人作品集网站)
                <span>{prevExp.companyShort || prevExp.company}</span>
              </div>
            </Link>
          ) : <div />}

          {nextExp ? (
            <Link
              to={`/experience/${nextExp.slug}`}
<<<<<<< HEAD
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-teal-400 transition-colors group"
=======
              className="flex items-center gap-2 text-sm text-zinc-500 hover:text-teal-400 transition-colors group"
>>>>>>> c3afca1 (Initial commit: 杨镕键个人作品集网站)
            >
              <div className="text-right">
                <span className="block text-xs text-zinc-600">{nextExp.period}</span>
                <span>{nextExp.companyShort || nextExp.company}</span>
              </div>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  )
}
