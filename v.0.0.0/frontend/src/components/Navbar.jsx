import { NavLink, useNavigate } from "react-router-dom"

import { assets } from "../assets/assets"
import { useState } from "react"


const navLinks = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "All Doctors",
        url: "doctors"
    },
    {
        name: "About",
        url: "about"
    },
    {
        name: "Contact",
        url: "contact"
    }
]

const Navbar = () => {
    const navigate = useNavigate()
    const [ isLoggedIn, setIsLoggedIn ] = useState(true)

    return (
        <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 tracking-widest">
            <NavLink to="/" className="w-44">
                <img src={assets.admin_logo} alt="Prescripto Logo" />
            </NavLink>

            <ul className="hidden md:flex gap-5 font-medium">
            {
                navLinks.map(navLink => (
                    <li key={navLink.name}>
                        <NavLink to={navLink.url} className="py-1 inline-block">{navLink.name.toUpperCase()}</NavLink>
                        <hr className="h-0.5 w-3/5 m-auto border-none outline-none bg-primary hidden"/>
                    </li>
                ))
            }
            </ul>

            {
                isLoggedIn ?
                (
                    <div className="flex items-center gap-2 cursor-pointer">
                        <img className="w-8 rounded-full" src={assets.profile_pic} alt="Profile Pic" />
                        <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdowm Icon" />
                    </div>
                ):
                <button 
                    onClick={() => navigate("/login")} 
                    className="bg-primary text-white hidden md:block rounded-full py-2 px-7 border-2 border-primary hover:bg-white hover:text-primary">
                    SIGN IN
                </button>
            }
        </div>
    )
}

export default Navbar