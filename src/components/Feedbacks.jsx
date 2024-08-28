import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { SectionWraper } from '../hoc'
import { textVariant } from '../utils/motion'
import { Tilt } from 'react-tilt'

const Feedbacks = () => {
  return (
    <>
      <motion.div key="CAC" variants={textVariant()}>
        <p className={styles.sectionSubText}>Upss, almost forgot something...</p>
        <h2 className={styles.sectionHeadText}>Check this out</h2>
      </motion.div>

      <div className='flex justify-center items-center mt-10'>
       
            <iframe
              className='rounded-xl'
              src="https://open.spotify.com/embed/track/75wvIkDl0mrrBMRYkqdMo1?utm_source=generator&theme=0"
              width="800"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              loading="lazy"
            ></iframe>
      </div>
    </>
  )
}

export default SectionWraper(Feedbacks, "Fee")
