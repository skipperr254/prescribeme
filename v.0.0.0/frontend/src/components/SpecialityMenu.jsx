import { Link } from "react-router-dom";
import { specialityData } from "../assets/data";

const SpecialityMenu = () => {
  return (
    <div
      id='speciality'
      className='flex flex-col items-center gap-4 text-gray-600 py-16'
    >
      <h2 className='text-3xl font-medium'>Find By Speciality</h2>
      <p className='sm:w-1/3 text-sm text-center'>
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle free
      </p>
      <div className='flex justify-center gap-4 pt-5 overflow-scroll w-full'>
        {specialityData.map((item) => (
          <Link
            to={`/doctors/${item.url}`}
            key={item.speciality}
            className='flex flex-col items-center text-xs flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'
          >
            <img
              src={item.image}
              alt='Speciality Image'
              className='w-16 sm:w-24 mb-2'
            />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
