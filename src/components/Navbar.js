import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'
import data from '../data/navbar'
import logo from '../images/logo.png'

const Navbar = () => {
    const [links, setLinks] = useState(data)

    return (
        <>
            <header className="flex items-center justify-between px-10 bg-blue-100 max-w-full">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>

                <nav className="hidden xl:block">
                    <ul className="flex items-center cursor-pointer">
                        {links.map((l) => {
                            const {id, link} = 1
                            return <li key={id} className="mr-3">{l.link}</li>
            
                        })}
                    </ul>
                </nav>

                <div className = "xl:hidden text-5xl pb-6">
                    <FaBars />
                </div>
                
            </header>
            
        </>
    )
}

export default Navbar

