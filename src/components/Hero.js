import React from 'react'
import hero from '../images/selfie.jpg'
import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const Hero = () => {
    return (
        <>
            <section className="bg-blue-100 pb-32 px-10 lg:flex lg:w-screen text-center items-center max-w-full">
                <div>
                    <h1 className="font-bold text-4xl mb-4">
                        Welcome to my Portfolio
                    </h1>
                    <p className="mb-4">
                        I am a frontend developer who enjoys working with HTML, CSS and JavaScript. I also have the ability to build websites using Bootsrap. I am currently building small apps and features using React.js as I continue to expand my tech stack
                    </p>
                    <div className="flex items-center">
                        <button className="bg-green-900 text-4xl py-3 px-5 mx-6 rounded-lg text-xl text-white mb-10 transition transform duration-300 hover:scale-125 hover:opacity-75">Contact Me</button>
                        <a href="#" className="bg-black items-center text-center text-3xl p-4 mx-2 rounded-lg text-xl text-white mb-10 transition transform duration-300 hover:scale-125 hover:opacity-75"> <FaGithubSquare /></a>
                        <a href="#" className="bg-black items-center text-center text-3xl p-4 mx-2 rounded-lg text-xl text-white mb-10 transition transform duration-300 hover:scale-125 hover:opacity-75"> <FaLinkedin /></a>
                    </div>
                    
                </div>

                <div>
                    <img className="w-screen m:w-2/3 rounded-full" src={hero} alt="" />
                </div>
            </section>
        </>
    )
}

export default Hero
