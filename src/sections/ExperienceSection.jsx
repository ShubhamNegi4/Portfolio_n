import TitleHeader from '../components/TitleHeader'
import { expCards, techSkills } from './constants.js'
import GlowCard from '../components/GlowCard.jsx'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const ExperienceSection = () => {
  useGSAP(()=>{
    gsap.utils.toArray('.timeline-card').forEach((card) =>{
      gsap.from(card, {
        xPercent: -100,
        opacity : 0, 
        transformOrigin:'left left',
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger:{
          trigger:card,
          start: 'top 80%'
        }

      })
    })

    gsap.utils.toArray('.expText').forEach((card) =>{
      gsap.from(text, {
        xPercent: 0,
        opacity : 0, 
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger:{
          trigger:text,
          start: 'top 60%'
        }

      })
    })
  }, []);
  return (
    <section
      id="experience"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-4">
        {/* Section Title */}
        <TitleHeader title="ABOUT" sub="My career overview" />

        {/* HEADINGS ROW */}
        <div className="mt-32 mb-10 flex flex-col md:flex-row md:justify-between md:items-center gap-6 text-center md:text-left">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 flex items-center gap-2">
            <span>🚀</span>
            Competitive Achievements & Tech Skills:
          </h1>
        </div>

        {/* TWO‑COLUMN CONTENT */}
        <div className="flex flex-col xl:flex-row gap-12">
          {/* LEFT COLUMN: Achievement Cards */}
          <div className="3xl:w-1/2 w-full space-y-6">
            {expCards.map((card, index) => (
              <GlowCard key={card.title || index} card={card} index={index} />
            ))}
          </div>

          {/* RIGHT COLUMN: Skill Lists */}
          <div className="xl:w-1/2 w-full space-y-6 text-white">
            {techSkills.map((skill, index) => (
              <div key={skill.title} className="glass-card glass-card-hover p-4 rounded-lg">
                <h2 className="text-2xl md:text-xl lg:text-2xl font-semibold mb-2">
                  {skill.title}
                </h2>
                <p className="text-lg md:text-base lg:text-lg italic text-white-50">
                  {skill.skills.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
