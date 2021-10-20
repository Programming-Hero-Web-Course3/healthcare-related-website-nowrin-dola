import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const Doctor = ({ doctor }) => {
    const { id1, name, picture, designation, department } = doctor;
    return (
        <div>
            <div className="col">
                <div className="card card-style">
                    <img src={picture} className="card-img-top img-style" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-fold">{name}</h5>
                        <p className="card-text"> <span className='fw-bold'>Department:</span> {department}</p>
                        <p className="card-text"><span className='fw-bold'>Designation:</span> {designation}</p>

                        <Link to={`/apoinment/${name}`}>
                            <Button className='btn btn-warning fw-bold'>Book Appoinment</Button>
                        </Link>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Doctor;