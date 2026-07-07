import { Suspense } from 'react'
import Hero from '../components/Hero'
<<<<<<< HEAD
import About from '../components/About'
=======
>>>>>>> c3afca1 (Initial commit: 杨镕键个人作品集网站)
import SectionWrapper from '../components/SectionWrapper'
import ExperienceTimeline from '../components/ExperienceTimeline'
import FeaturedProjects from '../components/FeaturedProjects'
import SkillsStrengths from '../components/SkillsStrengths'
<<<<<<< HEAD
=======
import Education from '../components/Education'
>>>>>>> c3afca1 (Initial commit: 杨镕键个人作品集网站)

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
<<<<<<< HEAD
        <About />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <SectionWrapper
          id="experience"
          title="职业经历"
          subtitle="从 IoT 平台到 AR 眼镜，从无人机到智能穿戴 - 8 年跨领域产品实践"
=======
        <SectionWrapper
          id="experience"
          title="职业经历"
          subtitle="8年+智能硬件产品经验，从 IoT 平台到 AR 眼镜，从无人机到智能穿戴"
>>>>>>> c3afca1 (Initial commit: 杨镕键个人作品集网站)
        >
          <ExperienceTimeline />
        </SectionWrapper>
      </Suspense>

      <Suspense fallback={<Loading />}>
        <SectionWrapper
          id="projects"
<<<<<<< HEAD
          title="项目经历"
          subtitle="覆盖 SaaS、AI、智能硬件等领域，从概念到落地的代表性作品"
=======
          title="精选项目"
          subtitle="从 0 到 1，从想法到落地 —— 有代表性的作品"
>>>>>>> c3afca1 (Initial commit: 杨镕键个人作品集网站)
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
<<<<<<< HEAD
=======

      <Suspense fallback={<Loading />}>
        <Education />
      </Suspense>
>>>>>>> c3afca1 (Initial commit: 杨镕键个人作品集网站)
    </main>
  )
}
