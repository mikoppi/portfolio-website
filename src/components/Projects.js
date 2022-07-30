import React from 'react'
import Project from './Project'
import { motion } from "framer-motion"


const Projects = () => {
  return (
    <section className='projects'>
        <div className='projects-wrapper'>
            <h2 className='projects-title'>Projects</h2>
            <motion.div
            initial={{ opacity: 0, x:-1000 }}
            whileInView={{ opacity: 1, x:0 }}
            //viewport={{ once: true }}
            //animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }} 
            >
            <Project
            title='FindTheseCharacters'
            description='Playstation 1 themed photo tagging app inspired by Wheres Waldo. 
            Find three characters as fast as possible and try to be the #1 on the global leaderboard!'
            tech='Built using React and Firebase'
            videoSource=''
            />
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x:1000 }}
            whileInView={{ opacity: 1, x:0 }}
            //viewport={{ once: true }}
            //animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }} 
            >
            <Project
            title='FindTheseCharacters'
            description='Playstation 1 themed photo tagging app inspired by Wheres Waldo. 
            Find three characters as fast as possible and try to be the #1 on the global leaderboard!'
            tech='Built using React and Firebase'
            videoSource=''
            />
            </motion.div>
        </div>
    </section>
  )
}

export default Projects