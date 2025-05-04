import TitleHeader from '../components/TitleHeader'
import { expCards } from './constants.js'
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
        <TitleHeader title="About Me" sub="My career overview" />

        {/* HEADINGS ROW */}
        <div className="mt-32 mb-10 flex flex-col md:flex-row md:justify-between md:items-center gap-6 text-center md:text-left">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 flex items-center gap-2">
            <span>🚀</span>
            Competitive achievements & tech skills:
          </h1>
        </div>

        {/* TWO‑COLUMN CONTENT */}
        <div className="flex flex-col xl:flex-row gap-12">
          {/* LEFT COLUMN: Achievement Cards */}
          <div className="xl:w-1/2 w-full space-y-6">
            {expCards.map((card, index) => (
              <GlowCard key={card.title || index} card={card} index={index} />
            ))}
          </div>

          {/* RIGHT COLUMN: Skill Lists */}
<div className="xl:w-1/2 w-full space-y-6 text-white">
  <div>
    <h2 className="text-4xl md:text-2xl lg:text-4xl font-semibold">
      Programming Languages:
    </h2>
    <p className="text-2xl md:text-xl lg:text-2xl italic mt-1">
      C, C++, Java, JavaScript, PHP, Python
    </p>
  </div>

  <div>
    <h2 className="text-4xl md:text-2xl lg:text-4xl font-semibold">
      Frameworks / Libraries:
    </h2>
    <p className="text-2xl md:text-xl lg:text-2xl italic mt-1">
      Springboot, Django, React.js, Next.js, Node.js, Express.js, EJS, Three-js, GSAP
    </p>
  </div>

  <div>
    <h2 className="text-4xl md:text-2xl lg:text-4xl font-semibold">
      Database:
    </h2>
    <p className="text-2xl md:text-xl lg:text-2xl italic mt-1">
      MySQL, MongoDB
    </p>
  </div>

  <div>
    <h2 className="text-4xl md:text-2xl lg:text-4xl font-semibold">
      DevOps:
    </h2>
    <p className="text-2xl md:text-xl lg:text-2xl italic mt-1">
      Docker, AWS
    </p>
  </div>

  <div>
    <h2 className="text-4xl md:text-2xl lg:text-4xl font-semibold">
      Developer Tools:
    </h2>
    <p className="text-2xl md:text-xl lg:text-2xl italic mt-1">
      GitHub, VS Code, Postman, MongoDB Atlas, Firebase, Eclipse, Jupyter Notebook
    </p>
  </div>
</div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
