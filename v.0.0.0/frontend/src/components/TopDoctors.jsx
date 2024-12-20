import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  return (
    <div className='flex flex-col items-center gap-4 my-16 md:mx-10 text-gray-900'>
      <h2 className='text-3xl font-medium'>Top Doctors to Book</h2>
      <p className='sm:w-1/3 text-center text-sm'>
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {doctors.slice(0, 10).map((doctor) => (
          <div
            onClick={() => navigate(`/appointment/${doctor._id}`)}
            key={doctor._id}
            className='border border-blue-200 rounded-xl cursor-pointer hover:translate-y-[-10px] transition-all durtation-500'
          >
            <img
              src={doctor.image}
              alt={`${doctor.name} Image`}
              className='bg-blue-50 rounded-t-xl'
            />
            <div className='p-4'>
              <div className='flex items-center text-sm text-green-500 text-center gap-2'>
                <p className='w-2 h-2 rounded-full bg-green-500'></p>
                <p>Available</p>
              </div>
              <p className='text-gray-900 text-lg font-medium'>{doctor.name}</p>
              <p className='text-gray-600 text-sm'>{doctor.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className='bg-blue-200 text-gray-600 px-12 py-3 rounded-full mt-10'
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
      >
        more
      </button>
    </div>
  );
};

export default TopDoctors;
