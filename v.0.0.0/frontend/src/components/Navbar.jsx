import { NavLink, useNavigate } from "react-router-dom"

import { assets } from "../assets/assets_admin/assets"

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

    return (
        <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
            <NavLink className="w-44">
                <img src={assets.admin_logo} alt="Prescripto Logo" />
            </NavLink>
            <ul className="hidden sm:flex gap-5 font-medium">
            {
                navLinks.map(navLink => (
                    <li key={navLink.name}>
                        <NavLink to={navLink.url} className="py-1 inline-block">{navLink.name.toUpperCase()}</NavLink>
                        <hr className="h-0.5 w-3/5 m-auto border-none outline-none bg-primary hidden"/>
                    </li>
                ))
            }
            </ul>
            <button onClick={() => navigate("login")} className="bg-primary text-white hidden md:block rounded-full font-light py-3 px-8">
                Create Account
            </button>
        </div>
    )
}

export default Navbar