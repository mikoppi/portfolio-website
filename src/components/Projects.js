import React from 'react'
import Project from './Project'
import { motion } from "framer-motion"
import shopImage1 from '../styles/utils/images/Screenshot_2022-08-14_11-58-44.png'
import shopImage2 from '../styles/utils/images/Screenshot_2022-08-14_11-59-53.png'


const shopImages = [
  {url: shopImage1},
  {url: shopImage2},
 
]

const Projects = () => {
  return (
    <section className='projects'>
        <div className='projects-wrapper'>
            <h2 className='projects-title'>Projects</h2>
            <motion.div
            initial={{ opacity: 0, x:200 }}
            whileInView={{ opacity: 1, x:0 }}
            viewport={{ once: true }}
            //animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }} 
            >
            <Project
            title='SteamDeals'
            description='An e-commerce web application to display games, that are on discount on the actual 
            Steam game store. It allows users to add items to shopping cart, edit quantities and remove items.'
            tech='Built with React using the CheapShark API '
            pictures={shopImages}
            url1='https://mikoppi.github.io/online-shop/'
            url2='https://github.com/mikoppi/online-shop'
            />
            </motion.div>
            <motion.div
            initial={{ opacity: 0, x:-200 }}
            whileInView={{ opacity: 1, x:0 }}
            viewport={{ once: true }}
            //animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }} 
            >
            <Project
            title='FindTheseCharacters'
            description='Playstation 1 themed photo tagging app inspired by Wheres Waldo. 
            Find three characters as fast as possible and try to be the #1 on the global leaderboard!'
            tech='Built using React and Firebase'
            pictures={shopImages}
            url1=''
            url2='https://github.com/mikoppi/wheres-waldo'
            />
            </motion.div>
            <motion.div
            initial={{ opacity: 0, x:200 }}
            whileInView={{ opacity: 1, x:0 }}
            viewport={{ once: true }}
            //animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }} 
            >
            <Project
            title='PokeMemory'
            description='Pokemon themed memory card game. Score 24 to beat the game'
            tech='Built with React'
            pictures={shopImages}
            url1='https://mikoppi.github.io/memory-card-game/'
            url2='https://github.com/mikoppi/memory-card-game'
            />
            </motion.div>

        </div>
    </section>
  )
}

export default Projects