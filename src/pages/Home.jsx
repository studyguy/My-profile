import { Suspense } from 'react'
import Hero from '../components/Hero'
import SectionWrapper from '../components/SectionWrapper'
import ExperienceTimeline from '../components/ExperienceTimeline'
import FeaturedProjects from '../components/FeaturedProjects'
import SkillsStrengths from '../components/SkillsStrengths'
import Education from '../components/Education'

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
        <SectionWrapper
          id="experience"
          title="职业经历"
          subtitle="8年+智能硬件产品经验，从 IoT 平台到 AR 眼镜，从无人机到智能穿戴"
        >
          <ExperienceTimeline />
        </SectionWrapper>
      </Suspense>

      <Suspense fallback={<Loading />}>
        <SectionWrapper
          id="projects"
          title="精选项目"
          subtitle="从 0 到 1，从想法到落地 —— 有代表性的作品"
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

      <Suspense fallback={<Loading />}>
        <Education />
      </Suspense>
    </main>
  )
}
