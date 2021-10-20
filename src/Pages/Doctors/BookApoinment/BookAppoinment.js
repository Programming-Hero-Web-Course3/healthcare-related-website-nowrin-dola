import React from 'react';
import { useParams } from 'react-router';
import pic from '../../../images/book Doctor/2053077.jpg';
import './BookAppoinment.css'

const BookAppoinment = () => {
    const { id } = useParams();
    return (
        <div className='m-5 text-center'>
            <img src={pic} className='book-pic' alt="" srcset="" />
            <h3 className='mt-3 text-danger'>you booked your appoinment for Dr. {id}</h3>

        </div>
    );
};

export default BookAppoinment;