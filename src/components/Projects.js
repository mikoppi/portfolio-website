import React from 'react'
import Project from './Project'
import { motion } from "framer-motion"
import shopImage1 from '../styles/utils/images/onlineshop1.jpg'
import shopImage2 from '../styles/utils/images/onlineshop2.jpg'
import shopImage3 from '../styles/utils/images/onlineshop3.jpg'
import citybike1 from '../styles/utils/images/citybike1.jpg'
import citybike2 from '../styles/utils/images/citybike2.jpg'
import citybike3 from '../styles/utils/images/citybike3.jpg'
import waldo1 from '../styles/utils/images/whereswaldo1.jpg'
import waldo2 from '../styles/utils/images/whereswaldo2.jpg'
import waldo3 from '../styles/utils/images/whereswaldo3.jpg'
import ship1 from '../styles/utils/images/battleship1.jpg'
import ship2 from '../styles/utils/images/battleship2.jpg'
import ship3 from '../styles/utils/images/battleship3.jpg'
import pokemon1 from '../styles/utils/images/pokememory1.jpg'
import pokemon2 from '../styles/utils/images/pokememory2.jpg'
import pokemon3 from '../styles/utils/images/pokememory3.jpg'

const shopImages = [
  {url: shopImage1},
  {url: shopImage2} ,
  {url: shopImage3} ,
]

const citybikeImages = [
  {url: citybike1},
  {url: citybike2},
  {url: citybike3}
]

const waldoImages = [
  {url: waldo1},
  {url: waldo2},
  {url: waldo3}
]

const battleshipImages = [
  {url: ship1},
  {url: ship2},
  {url: ship3}
]

const pokemonImages = [
  {url:pokemon1},
  {url:pokemon2},
  {url:pokemon3}
]

const Projects = () => {
  return (
    <section className='projects'>
        <div className='projects-wrapper'>
            <h2 className='projects-title'>Projects</h2>
            <motion.div
            className='project-wrapper'
            initial={{ opacity: 0, x:200 }}
            whileInView={{ opacity: 1, x:0 }}
            viewport={{ amount:0.3,once: true }}
            //animate={{ x: 0 }}
            transition={{ type: 'spring',mass: 1,ease: "easeOut", duration: 1.5}} 
            >
            <Project
            title='Helsinki city bike app'
            description='The apps purpose is to display information about Helsinki city bike stations, 
             and show data about journeys made with the bikes. The data is parsed and validated from large .csv files and 
             then imported to a database.
             '
            tech='Built with MERN stack (MongoDB, Express, React and NodeJS) 
            with a deployment in Heroku cloud platform'
            pictures={citybikeImages}
            url1='https://boiling-waters-92875.herokuapp.com/'
            url2='https://github.com/mikoppi/city-bike-app'
            />
            </motion.div>

            <motion.div
            className='project-wrapper'
            id='reversed'
            initial={{ opacity: 0, x:-200 }}
            whileInView={{ opacity: 1, x:0 }}
            viewport={{ amount:0.3,once: true }}
            //animate={{ x: 0 }}
            transition={{ type: 'spring',mass: 1,ease: "easeOut", duration: 1.5,}} 
            >
            <Project
            title='SteamDeals'
            description='An e-commerce web application to display games, that are on discount on the actual 
            Steam game store. It allows users to add items to shopping cart,
             edit quantities and remove items. It also has pagination and sorting functionalities.'
            tech='Built with React using the CheapShark API '
            pictures={shopImages}
            url1='https://mikoppi.github.io/online-shop/'
            url2='https://github.com/mikoppi/online-shop'
            />
            </motion.div>
            <motion.div
            className='project-wrapper'
            
            initial={{ opacity: 0, x:200 }}
            whileInView={{ opacity: 1, x:0 }}
            viewport={{ amount:0.3,once: true }}
            //animate={{ x: 0 }}
            transition={{ type: 'spring',mass: 1,ease: "easeOut", duration: 1.5 }} 
            >
            <Project
            title='FindTheseCharacters'
            description='Playstation 1 themed photo tagging app inspired by Wheres Waldo. 
            Find three characters as fast as possible and try to be the #1 on the global leaderboard!'
            tech='Built using React and Firebase'
            pictures={waldoImages}
            url1='https://wheres-waldo-a04d0.web.app/'
            url2='https://github.com/mikoppi/wheres-waldo'
            />
            </motion.div>
            <motion.div
            className='project-wrapper'
            id='reversed'
            initial={{ opacity: 0, x:-200 }}
            whileInView={{ opacity: 1, x:0 }}
            viewport={{ amount:0.3,once: true }}
            //animate={{ x: 0 }}
            transition={{ type: 'spring',mass: 1,ease: "easeOut", duration: 1.5,}} 
            >
            <Project
            title='Battleship'
            description='Classic battleship game against your computer. Place your ships first, then try to find 
            the enemy ships before your ships are found and sunk. '
            tech='Built with vanilla Javascript, HTML and CSS'
            pictures={battleshipImages}
            url1='https://mikoppi.github.io/Battleship/'
            url2='https://github.com/mikoppi/Battleship'
            />
            </motion.div>

            <motion.div
            className='project-wrapper'
            initial={{ opacity: 0, x:200 }}
            whileInView={{ opacity: 1, x:0 }}
            viewport={{ amount:0.3,once: true }}
            //animate={{ x: 0 }}
            transition={{ type: 'spring',mass: 1,ease: "easeOut", duration: 1.5,}} 
            >
            <Project
            title='PokéMemory'
            description='Pokémon themed memory card game. Score 24 to beat the game!'
            tech='Built with React using PokéAPI'
            pictures={pokemonImages}
            url1='https://mikoppi.github.io/memory-card-game/'
            url2='https://github.com/mikoppi/memory-card-game'
            />
            </motion.div>

        </div>
    </section>
  )
}

export default Projects