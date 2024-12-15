import { Routes, Route } from "react-router-dom"
import { Home, About, Login, Contact } from "./pages"
import { Navbar } from "./components"

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App