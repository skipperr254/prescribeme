import { NavLink } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { assets } from "../assets/assets_admin/assets"

const links = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Doctors",
        url: "/doctors"
    },
    {
        name: "About",
        url: "/about"
    },
    {
        name: "Contact",
        url: "/contact"
    }
]

const Navbar = () => {
    const navigate = useNavigate()
    const [ loggedIn, setLoggedIn ] = useState(true)

    return (
        <div className="flex justify-between items-center border-b border-b-gray-400 mb-5 py-4">
            <NavLink className="w-44">
                <img src={assets.admin_logo} alt="Company logo" />
            </NavLink>
            <ul className="hidden md:flex gap-5 font-medium">
                {
                    links.map(link => (
                        <li key={link.name}>
                            <NavLink to={link.url} className="py-1 inline-block">
                                {link.name.toUpperCase()}
                            </NavLink>
                            <hr className="h-0.5 w-3/5 mx-auto bg-primary hidden" />
                        </li>
                    ))
                }
            </ul>
            {
                loggedIn ?
                <h1>A</h1> :
                (
                    <div>
                        <button 
                            onClick={() => navigate("login")} 
                            className="text-white bg-primary rounded-full py-2 px-7 text-light tracking-widest hover:text-primary hover:bg-white border-2 hover:border-primary">
                            SIGN IN
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default Navbar