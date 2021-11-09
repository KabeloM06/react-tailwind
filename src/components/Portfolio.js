import React from 'react'
import kingwolf from '../images/KingWolf.jpg'
import quizzapp from '../images/QuizzApp.jpg'
import indalo from '../images/portfolio-images/IMG_20211029_092928.jpg'
import drums from '../images/portfolio-images/IMG_20211029_092946.jpg'
import todojs from '../images/portfolio-images/IMG_20211029_093023.jpg'
import blogpractice from '../images/portfolio-images/IMG_20211029_093318.jpg'


const Portfolio = () => {
    return (
        <>
            <section className="p-10 max-w-full">
                <h2 className="text-center font-bold text-3xl pb-10">My Favourite Projects</h2>                

                <div className="lg:flex text-center items-center lg:justify-center block">
                    <div className="m-10">
                        <h3 className="my-5 font-bold text-5xl text-green-900">KingWolf</h3>
                        <img src={kingwolf} className="" alt="" />
                        <p>
                            A website for a services company. Most of the website is in CSS and JavaScript, but the toggle menu is in JQuery.
                        </p>
                        <div className="flex mt-4 items-center text-center justify-center">
                            <button className="bg-green-900 text-3xl rounded-lg text-xl text-white p-2 mx-4 mt-4 transition transform duration-300 hover:opacity-75 hover:scale-125">Live Demo</button>
                            <button className="bg-green-900 text-3xl rounded-lg text-xl text-white p-2 mx-4 mt-4 transition transform duration-300 hover:opacity-75 hover:scale-125">GitHub Repo</button>
                        </div>
                    
                    </div>
                    
                    <div className="m-10">
                        <h3 className="my-5 font-bold text-5xl text-green-900">Quizz App</h3>
                        <img src={quizzapp} className="" alt="" />
                        <p>
                        An project to practice my JavaScript logic and arrays. The only way to add and delete questions is menually through the JavaScript file.
                        </p>
                        <div className="flex mt-4 items-center text-center justify-center">
                            <button className="bg-green-900 text-3xl rounded-lg text-xl text-white p-2 mx-4 mt-4 transition transform duration-300 hover:opacity-75 hover:scale-125">Live Demo</button>
                            <button className="bg-green-900 text-3xl rounded-lg text-xl text-white p-2 mx-4 mt-4 transition transform duration-300 hover:opacity-75 hover:scale-125">GitHub Repo</button>
                        </div>
                    
                    </div>
                </div>
                <div className="lg:flex text-center items-center lg:justify-center block">
                    <div className="m-10">
                        <h3 className="my-5 font-bold text-5xl text-green-900">Drum Project</h3>
                        <img src={drums} className="" alt="" />
                        <p>
                            Drum project to practice my switch JavaScript switch statements
                        </p>
                        <div className="flex mt-4 items-center text-center justify-center">
                            <button className="bg-green-900 text-3xl rounded-lg text-xl text-white p-2 mx-4 mt-4 transition transform duration-300 hover:opacity-75 hover:scale-125">Live Demo</button>
                            <button className="bg-green-900 text-3xl rounded-lg text-xl text-white p-2 mx-4 mt-4 transition transform duration-300 hover:opacity-75 hover:scale-125">GitHub Repo</button>
                        </div>
                    
                    </div>
                    
                    <div className="m-10">
                        <h3 className="my-5 font-bold text-5xl text-green-900">Indalo Healing</h3>
                        <img src={indalo} className="" alt="" />
                        <p>
                            A live WordPress website built for a client
                        </p>
                        <div className="flex mt-4 items-center text-center justify-center">
                            <button className="bg-green-900 text-3xl rounded-lg text-xl text-white p-2 mx-4 mt-4 transition transform duration-300 hover:opacity-75 hover:scale-125">Live Demo</button>
                            <button className="bg-green-900 text-3xl rounded-lg text-xl text-white p-2 mx-4 mt-4 transition transform duration-300 hover:opacity-75 hover:scale-125">GitHub Repo</button>
                        </div>
                    
                    </div>
                </div>
                <div className="lg:flex text-center items-center lg:justify-center block">
                    
                    
                    
                    <div className="m-10">
                        <h3 className="my-5 font-bold text-5xl text-green-900">Todo</h3>
                    
                        <img src={todojs} className="" alt="" />

                        <p>
                            A Todo app used to practice my CSS and JavaScript logic
                        </p>
                        <div className="flex mt-4 items-center text-center justify-center">
                            <button className="bg-green-900 text-3xl rounded-lg text-xl text-white p-2 mx-4 mt-4 transition transform duration-300 hover:opacity-75 hover:scale-125">Live Demo</button>
                            <button className="bg-green-900 text-3xl rounded-lg text-xl text-white p-2 mx-4 mt-4 transition transform duration-300 hover:opacity-75 hover:scale-125">GitHub Repo</button>
                        </div>
                    
                    </div>
                    <div className="m-10">
                        <h3 className="my-5 font-bold text-5xl text-green-900">Blog</h3>
                    
                        <img src={blogpractice} className="" alt="" />
                        <p>
                            A practice blog using CSS and JQuery
                        </p>
                        <div className="flex mt-4 items-center text-center justify-center">
                            <button className="bg-green-900 text-3xl rounded-lg text-xl text-white p-2 mx-4 mt-4 transition transform duration-300 hover:opacity-75 hover:scale-125">Live Demo</button>
                            <button className="bg-green-900 text-3xl rounded-lg text-xl text-white p-2 mx-4 mt-4 transition transform duration-300 hover:opacity-75 hover:scale-125">GitHub Repo</button>
                        </div>
                    
                    </div>
                </div>

            </section>   
        </>
    )
}

export default Portfolio




