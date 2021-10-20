import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';


const Service = ({ service }) => {
    const { id1, name, picture, description } = service;

    return (
        <div>
            <div className="col">
                <div className="card card-style">
                    <img src={picture} className="card-img-top img-style" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-primary">{name}</h5>
                        <p className="card-text">{description}</p>
                        <Link to={`/details/${id1}`}>
                            <Button className='btn btn-warning fw-bold'>see Details</Button>
                        </Link>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;