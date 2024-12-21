import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import { MdClear } from "react-icons/md";
import { SiGhostery } from "react-icons/si";

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors, specialityData } = useContext(AppContext);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const navigate = useNavigate();

  const filterDoctors = () => {
    if (speciality) {
      setFilteredDoctors(
        doctors.filter((doc) => doc.speciality === speciality)
      );
    } else {
      setFilteredDoctors(doctors);
    }
  };

  useEffect(() => {
    filterDoctors();
  }, [doctors, speciality]);

  return (
    <div>
      <p className='text-gray-600'>Browse doctors by speciality.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <Link
            className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all flex gap-1 items-center'
            to='/doctors'
          >
            <MdClear className='text-xl' />
            Clear Filter
          </Link>
          {specialityData.map((specialityItem) => (
            <Link
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all ${
                speciality === specialityItem.url
                  ? "bg-indigo-200 text-black"
                  : ""
              }`}
              key={specialityItem.speciality}
              to={`/doctors/${specialityItem.url}`}
            >
              {specialityItem.speciality}
            </Link>
          ))}
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6 px-3 sm:px-0'>
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
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
                  <p className='text-gray-900 text-lg font-medium'>
                    {doctor.name}
                  </p>
                  <p className='text-gray-600 text-sm'>{doctor.speciality}</p>
                </div>
              </div>
            ))
          ) : (
            <div className='flex gap-2 text-xl items-center text-gray-700'>
              <p>Nothing to see here</p>
              <SiGhostery />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
