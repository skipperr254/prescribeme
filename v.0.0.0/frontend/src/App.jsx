import { Routes, Route } from "react-router-dom";
import { Home, About, Login, Contact, Doctors, Appointment } from "./pages";
import { Navbar, Footer } from "./components";

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/appointments/:doctorId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
