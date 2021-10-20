import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id='services'>
            <p className='mt-5 text-center fw-bold'> Our <span className='text-warning'>Services </span></p>
            <h3 className='fw-bold text-center'><span className='text-primary'>Health Services</span> we Provided</h3>

            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 m-5'>



                {
                    services.map((service => <Service
                        key={service.id1}
                        service={service}
                    ></Service>))

                }
            </div>




        </div>
    );
};

export default Services;