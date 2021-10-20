import React from 'react';
import { Link } from 'react-router-dom';
import aboutPic from '../../images/About/About.JPG';

const About = () => {
    return (

        <div>
            <div class="container">
                <div class="row mt-5">
                    <div class="col-12 col-lg-6 ">
                        <img src={aboutPic} className='d-block img-fluid' alt="" srcset="" />

                    </div>
                    <div class="col-12 col-lg-6">
                        <h5 className='text-center fw-bold'><span className='text-warning '>About</span> Us</h5>
                        <h1 className='text-primary fw-bold' >We Are Happy To Serve You!</h1>
                        <p>
                            Opening its doors in August 2006 and situated beside the picturesque Gulshan Lake, this hospital is one of the largest private sector healthcare facilities in Bangladesh. Castle Health Care has the capacity to house over 500 patients and has 12 state of the art operation theatres to cater to the needs of varied patient base.With more than 30 clinical sub specialties, our centres of Excellence like Cardiac, Cancer, Renal, Surgical, Neuroscience, Mother & Child Health and Critical Care Centres are staffed by the most esteemed doctors in their respective fields. Since inception till date (July 2021) we have conducted 420,000 Cardiac Investigations, 55,000 Cardiac Procedures, 14,000 Heart Surgeries with 98% success rate, 39 Kidney Transplant, 295,000 Haemodialysis, 185,000 Radiation Therapy Sessions & 196,000 Health Checkups completed.</p>
                        <Link to='/about'><button className='btn btn-danger rounded-pill fw-bold'>Read More</button></Link>

                    </div>

                </div>

            </div>
        </div>
        // <div className='d-flex m-5'>

        //     <div className='col-md-6 col-sm-12 col-lg-6'>
        //         <img src={aboutPic} className='d-block img-fluid' alt="" srcset="" />

        //     </div>
        //     <div className='col-md-6 col-sm-12 col-lg-6'>
        //         <h5 className='text-center fw-bold'><span className='text-warning '>About</span> Us</h5>
        //         <h1 className='text-primary fw-bold' >We Are Happy To Serve You!</h1>
        //         <p>
        //             Opening its doors in August 2006 and situated beside the picturesque Gulshan Lake, this hospital is one of the largest private sector healthcare facilities in Bangladesh. Castle Health Care has the capacity to house over 500 patients and has 12 state of the art operation theatres to cater to the needs of varied patient base.With more than 30 clinical sub specialties, our centres of Excellence like Cardiac, Cancer, Renal, Surgical, Neuroscience, Mother & Child Health and Critical Care Centres are staffed by the most esteemed doctors in their respective fields. Since inception till date (July 2021) we have conducted 420,000 Cardiac Investigations, 55,000 Cardiac Procedures, 14,000 Heart Surgeries with 98% success rate, 39 Kidney Transplant, 295,000 Haemodialysis, 185,000 Radiation Therapy Sessions & 196,000 Health Checkups completed.</p>
        //         <Link to='/about'><button className='btn btn-danger rounded-pill fw-bold'>Read More</button></Link>
        //     </div>

        // </div>
    );
};

export default About;