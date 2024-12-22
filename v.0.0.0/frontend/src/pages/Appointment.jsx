import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { MdVerified } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Appointment = () => {
  const { doctorId } = useParams();
  const { doctors } = useContext(AppContext);
  const [doctorInfo, setDoctorInfo] = useState(null);

  const getDoctorInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === doctorId);
    setDoctorInfo(docInfo);
    console.log(docInfo);
  };

  const slugify = (slug) => {
    return slug.charAt(0).toUpperCase() + slug.slice(1).replace("-", " ");
  };

  useEffect(() => {
    getDoctorInfo();
  }, [doctors, doctorId]);

  return (
    <div>
      {doctorInfo && (
        <div>
          <div className='flex flex-col sm:flex-row gap-4'>
            <div>
              <img
                className='bg-primary w-full sm:max-w-72 rounded-lg'
                src={doctorInfo.image}
                alt={`${doctorInfo.name}'s Picture`}
              />
            </div>
            <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
              <p className='flex items-center gap-2 text-2xl font-medium text-gray-9s00'>
                {doctorInfo.name} <MdVerified className='text-primary' />
              </p>
              <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
                <p>
                  {doctorInfo.degree} - {slugify(doctorInfo.speciality)}
                </p>
                <button>{doctorInfo.experience}</button>
              </div>
              <div>
                <p className='flex items-center gap-1 font-medium text-gray-900 text-sm mt-3'>
                  About
                  <IoIosInformationCircleOutline />
                </p>
                <p className='text-sm text-gray-500 max-2-[700px] mt-1'>
                  {doctorInfo.about}
                </p>
              </div>
              <p className='text-gray-500 font-medium mt-4'>
                Appointment fee:{" "}
                <span className='text-gray-600'>${doctorInfo.fees}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointment;
