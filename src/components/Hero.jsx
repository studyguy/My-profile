import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { personalInfo } from '../data/placeholder'
import BlurText from './BlurText'

const fadeBlurUp = {
  initial: { filter: 'blur(8px)', opacity: 0, y: 30 },
  animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 60])

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToExperience = () => {
    const el = document.getElementById('experience')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.section
      ref={ref}
      id="hero"
      style={{ opacity, scale, y }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 dot-bg opacity-20" />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-teal-500/5 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[100px] animate-float" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto w-full">
        {/* Tagline */}
        <div className="mb-8">
          <BlurText
            text="Product Manager Portfolio"
            delay={60}
            animateBy="words"
            direction="top"
            stepDuration={0.35}
            className="text-sm md:text-base text-teal-400 font-medium tracking-[0.2em] uppercase justify-center"
          />
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-[1.05] flex justify-center">
          <BlurText
            text={personalInfo.name}
            delay={80}
            animateBy="letters"
            direction="top"
            stepDuration={0.4}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05]"
          />
        </h1>

        {/* Subtitle with blur effect */}
        <motion.p
          variants={fadeBlurUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.subtitle}
        </motion.p>

        {/* CTA Buttons with blur effect */}
        <motion.div
          variants={fadeBlurUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, delay: 1.0, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToContact}
            className="group relative w-40 inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-teal-400 text-zinc-950 font-semibold text-base hover:bg-teal-300 transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/20"
          >
            <Mail size={18} />
            联系我
          </button>

          <button
            onClick={scrollToExperience}
            className="group w-40 inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/10 text-zinc-300 font-medium text-base hover:border-white/20 hover:text-zinc-100 transition-all duration-300"
          >
            了解更多
            <ArrowDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator — positioned near bottom of viewport */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-6 h-10 rounded-full border border-white/15 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-2.5 rounded-full bg-teal-400/80"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
