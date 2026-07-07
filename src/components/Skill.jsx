import { skills } from '../data'
import SectionTitle from './SectionTitle'
import SkillsCard from './SkillsCard'
const Skills = () => {
  return (
    <section
      className='py-20 mx-auto max-w-7xl px-8 capitalize  font-bold'
      id='skills'
    >
      <SectionTitle className='text-9xl' text='tech stack' />
      <div className='py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />
        })}
      </div>
    </section>
  )
}
export default Skills
