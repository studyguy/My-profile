import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Award, ChevronLeft, ChevronRight } from 'lucide-react'

export default function DetailLayout({
  item,
  items,
  basePath,
  topBarTitle,
  notFoundMessage = '未找到该页面',
  achievementsTitle = '亮点',
  navSubtitle,
  navTitle,
  heroSection,
  imageSection,
  children,
}) {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950">
        <div className="text-center">
          <p className="text-zinc-400 mb-4">{notFoundMessage}</p>
          <Link to="/" className="text-teal-400 hover:text-teal-300 transition-colors">
            返回首页
          </Link>
        </div>
      </div>
    )
  }

  const currentIndex = items.findIndex(i => i.slug === slug)
  const prevItem = currentIndex > 0 ? items[currentIndex - 1] : null
  const nextItem = currentIndex < items.length - 1 ? items[currentIndex + 1] : null

  return (
    <div className="min-h-screen">
      {/* Top Bar */}
      <div
        className={`sticky top-0 z-40 border-b transition-colors duration-700 ${
          scrolled
            ? 'bg-zinc-950/70 backdrop-blur-xl border-white/[0.06]'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className={`flex items-center gap-2 transition-colors text-sm ${
              scrolled ? 'text-zinc-400 hover:text-zinc-100' : 'text-zinc-300 hover:text-zinc-100'
            }`}
          >
            <ArrowLeft size={16} />
            返回首页
          </button>
          <span className={`text-xs transition-colors duration-700 truncate max-w-[200px] ${
            scrolled ? 'text-zinc-400' : 'text-zinc-500'
          }`}>{topBarTitle}</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Hero Section */}
        {heroSection}

        {/* Image Section */}
        {imageSection}

        {/* Detail Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-10 mb-14"
        >
          {item.detailContent.map((section, i) => (
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
        {item.achievements.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-teal-400 mb-6 flex items-center gap-2">
              <Award size={18} />
              {achievementsTitle}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {item.achievements.map((ach, i) => (
                <div key={i} className="glass rounded-xl p-5">
                  <p className="text-2xl font-bold text-zinc-100 mb-1">{ach.value}</p>
                  <p className="text-xs text-zinc-300">{ach.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Extra Sections (tech stack, etc.) */}
        {children}

        {/* Navigation Footer */}
        <div className="mt-20 pt-8 border-t border-white/[0.06] flex items-center justify-between">
          {prevItem ? (
            <Link
              to={`${basePath}${prevItem.slug}`}
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-teal-400 transition-colors group"
            >
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <span className="block text-xs text-zinc-400">{navSubtitle(prevItem)}</span>
                <span>{navTitle(prevItem)}</span>
              </div>
            </Link>
          ) : <div />}

          {nextItem ? (
            <Link
              to={`${basePath}${nextItem.slug}`}
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-teal-400 transition-colors group"
            >
              <div className="text-right">
                <span className="block text-xs text-zinc-400">{navSubtitle(nextItem)}</span>
                <span>{navTitle(nextItem)}</span>
              </div>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  )
}
