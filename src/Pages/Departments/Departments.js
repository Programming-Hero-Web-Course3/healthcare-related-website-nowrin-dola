import React from 'react';

const Departments = () => {
    return (
        <div className='w-50 text-center' style={{ margin: 'auto' }}>
            <h2 className='fw-bold text-center m-3'><span className='text-primary'>Our</span> Departments</h2>
            <table class="table table-success table-striped table-hover mx-auto">
                <thead>
                    <tr>

                        <th scope="col">Departments</th>
                        <th scope="col">Floor</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>Emergency Room</td>
                        <td>1st Floor</td>

                    </tr>
                    <tr>

                        <td>Diagnostic</td>
                        <td>2nd Floor</td>

                    </tr>
                    <tr>

                        <td>Report Delivery</td>
                        <td>2nd Floor</td>

                    </tr>
                    <tr>

                        <td>Consultant Doctors Chamber</td>
                        <td>3rd & 4th Floor</td>

                    </tr>
                    <tr>

                        <td>operating Theater (OT)</td>
                        <td>5th Floor</td>

                    </tr>
                    <tr>

                        <td>intensive care unit (ICU)</td>
                        <td>5th Floor</td>

                    </tr>
                    <tr>

                        <td>cardiac care unit (CCU)</td>
                        <td>5th Floor</td>

                    </tr>
                    <tr>

                        <td>Wards & Cabins</td>
                        <td>6th-10th Floor</td>

                    </tr>

                </tbody>
            </table>

        </div>
    );
};

export default Departments;