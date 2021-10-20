import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div id='services'>
            <p className='mt-5 text-center fw-bold'> Our <span className='text-warning'>Team </span></p>
            <h2 className='fw-bold text-center '><span className='text-primary'>Our Dedicated</span> Doctors </h2>

            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 m-5'>



                {
                    doctors.map((doctor => <Doctor
                        key={doctor.id1}
                        doctor={doctor}
                    ></Doctor>))

                }
            </div>




        </div>
    );
};

export default Doctors;