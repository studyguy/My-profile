import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Sparkles, Monitor, Layers, Cpu } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const professionalTags = [
  { label: 'SaaS', icon: Monitor },
  { label: 'AI 产品', icon: Sparkles },
  { label: '智能硬件', icon: Cpu },
  { label: '算法对接', icon: Layers },
  { label: '边界探索', icon: Briefcase },
]

const personalTags = [
  { label: 'AIGC', desc: '本地部署 · 图文/3D' },
  { label: 'Vibcoding', desc: 'Web/Android/Unity' },
  { label: '播客', desc: '收听 2000h+' },
]

export default function About() {
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 1024px)')
    setIsDesktop(mql.matches)
    const handler = (e) => setIsDesktop(e.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  return (
    <SectionWrapper
      id="about"
      title="关于我"
      subtitle="8年+产品经验，主攻 SaaS、AI、智能硬件领域"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
        {/* Professional Card */}
        <motion.div
          initial={isDesktop ? { opacity: 0, x: -30 } : { opacity: 0, y: 30 }}
          whileInView={isDesktop ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: isDesktop ? 0 : 0, ease: 'easeOut' }}
          className="glass rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-teal-400/10 flex items-center justify-center">
              <Briefcase size={20} className="text-teal-400" />
            </div>
            <h3 className="text-xl font-bold text-zinc-100">专业经验</h3>
          </div>

          <p className="text-zinc-400 leading-relaxed mb-6 text-sm md:text-base">
            8年以上产品经验，具备丰富的软硬件产品设计及算法团队对接经验。
            擅长在技术边界探索中定义产品方向，将复杂技术转化为可落地的产品方案。
          </p>

          <div className="flex flex-wrap gap-2">
            {professionalTags.map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-sm text-zinc-300"
              >
                <tag.icon size={13} className="text-teal-400/60" />
                {tag.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Personal Card */}
        <motion.div
          initial={isDesktop ? { opacity: 0, x: 30 } : { opacity: 0, y: 30 }}
          whileInView={isDesktop ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: isDesktop ? 0.1 : 0.15, ease: 'easeOut' }}
          className="glass rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-violet-400/10 flex items-center justify-center">
              <Sparkles size={20} className="text-violet-400" />
            </div>
            <h3 className="text-xl font-bold text-zinc-100">个人特质</h3>
          </div>

          <p className="text-zinc-400 leading-relaxed mb-6 text-sm md:text-base">
            AIGC 深度爱好者，本地部署覆盖图、文、3D 生成，深谙各模型差异。
            精通 Vibcoding，具备 Web、安卓及 Unity 简单项目开发经验。
          </p>

          <div className="space-y-3">
            {personalTags.map((tag, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.05]"
              >
                <span className="w-2 h-2 rounded-full bg-violet-400/60 flex-shrink-0" />
                <div>
                  <span className="text-sm font-medium text-zinc-200">{tag.label}</span>
                  <span className="text-xs text-zinc-500 ml-2">{tag.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
