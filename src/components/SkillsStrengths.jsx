import { skills } from '../data/placeholder'
import SkillCard from './SkillCard'

export default function SkillsStrengths() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {skills.map((skill, index) => (
        <SkillCard key={skill.id} skill={skill} index={index} />
      ))}
    </div>
  )
}
