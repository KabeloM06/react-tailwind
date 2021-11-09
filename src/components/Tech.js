import React from 'react'
import html from '../images/html-1.svg'
import css from '../images/css-3.svg'
import javascript from '../images/javascript-1.svg'
import bootstrap from '../images/bootstrap-5-1.svg'
import tailwind from '../images/tailwindcss.svg'
import react from '../images/react-2.svg'

const Tech = () => {
    return (
        <>
            <section id="Tech" className="p-10 max-w-full">
                <h2 className="text-center font-bold text-3xl pb-10">My Tech Stack</h2>
                <div className="lg:flex text-center items-center lg:justify-center block">
                    <div className="m-10">
                        <h3 className="my-5 font-bold text-5xl text-green-900">HTML</h3>
                    
                        <img src={html} className="" alt="" />
                    
                    </div>
                    <div className="m-10">
                        <h3 className="my-5 font-bold text-5xl text-green-900">CSS</h3>
                    
                        <img src={css} className="" alt="" />
                    
                    </div>
                    <div className="m-10">
                        <h3 className="my-5 font-bold text-5xl text-green-900">JavaScript</h3>
                    
                        <img src={javascript} className="" alt="" />
                    
                    </div>
                </div>
                <div className="lg:flex text-center items-top lg:justify-center block">
                    <div className="m-10">
                        <h3 className="my-5 font-bold text-5xl text-green-900">Bootstrap</h3>
                    
                        <img src={bootstrap} className="" alt="" />
                    
                    </div>
                    <div className="m-10">
                        <h3 className="mb-12 mt-7 font-bold text-5xl text-green-900">Tailwind</h3>
                    
                        <img src={tailwind} className="" alt="" />
                    
                    </div>
                    <div className="m-10">
                        <h3 className="mt-7 font-bold text-5xl text-green-900">React</h3>
                    
                        <img src={react} className="" alt="" />
                    
                    </div>
                </div>

            </section>   
        </>
    )
}

export default Tech
