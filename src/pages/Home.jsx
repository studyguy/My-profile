import { Suspense } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import SectionWrapper from '../components/SectionWrapper'
import ExperienceTimeline from '../components/ExperienceTimeline'
import FeaturedProjects from '../components/FeaturedProjects'
import SkillsStrengths from '../components/SkillsStrengths'

function Loading() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-6 h-6 border-2 border-teal-400/30 border-t-teal-400 rounded-full animate-spin" />
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <Hero />

      <Suspense fallback={<Loading />}>
        <About />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <SectionWrapper
          id="experience"
          title="职业经历"
          subtitle="从 IoT 平台到 AR 眼镜，从无人机到智能穿戴 - 8 年跨领域产品实践"
        >
          <ExperienceTimeline />
        </SectionWrapper>
      </Suspense>

      <Suspense fallback={<Loading />}>
        <SectionWrapper
          id="projects"
          title="项目经历"
          subtitle="覆盖 SaaS、AI、智能硬件等领域，从概念到落地的代表性作品"
        >
          <FeaturedProjects />
        </SectionWrapper>
      </Suspense>

      <Suspense fallback={<Loading />}>
        <SectionWrapper
          id="skills"
          title="核心能力"
          subtitle="持续打磨的专业能力，构成了我解决问题的工具箱"
        >
          <SkillsStrengths />
        </SectionWrapper>
      </Suspense>
    </main>
  )
}
