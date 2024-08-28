import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../style'
import { experiences } from '../constants/constants'
import { SectionWraper } from '../hoc'
import { textVariant } from '../utils/motion'

const ExperienceCard =({ experience }) => {
  return (
    <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: "#ffffff"}}
    contentArrowStyle={{borderRight: "7px solid #232631 "}}
    date={experience.date}
    iconStyle={{ background: experience.iconBg}}
    icon = { 
      <div>
        <img
          src={experience.icon}
          alt={experience.company_name}
        />
      </div>
    }
    >
      <div>
        <h3 className=' text-white text-[24px] font-bold' >{experience.title}</h3>
      </div>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div
      variants={textVariant()}
      >
         <p className={styles.sectionSubText}>What I've done</p>
         <h2 className={styles.sectionHeadText}>My Works</h2>
      </motion.div>

      <div className=' mt-20 flex flex-col' >
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            experience={experience}
          />
        ))}
      </VerticalTimeline>

      </div>
    </>
  )
}

export default SectionWraper(Experience, "experience")