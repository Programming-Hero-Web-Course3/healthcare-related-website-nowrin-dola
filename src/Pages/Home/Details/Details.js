import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css'

const Details = () => {
    const { serviceid } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);
    const [singleService, setSingleService] = useState({});
    useEffect(() => {
        fetch('/serviceDetails.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data.service))
    }, [])

    useEffect(() => {
        const foundService = serviceDetails.find(serv => serv.id1 === serviceid)
        setSingleService(foundService)
    }, [serviceDetails])
    return (
        <div>
            <div className="col m-5 ">
                <div className="card crd card-style mx-auto">
                    <img src={singleService?.picture} className="card-img-top img-style" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-primary">{singleService?.name}</h5>
                        <p className="card-text">{singleService?.description}</p>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;