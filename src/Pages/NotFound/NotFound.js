import React from 'react';
import error from '../../images/Page Not Found/page not found.jpg'

const NotFound = () => {
    return (
        <div>
            <img src={error} style={{ width: '500px', height: '500px' }} alt="" srcset="" />
            <div>
                <button className='btn btn-warning mt-3'>Go Back</button>
            </div>
        </div>
    );
};

export default NotFound;