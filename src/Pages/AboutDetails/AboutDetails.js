import React from 'react';
import aboutPic from '../../images/About/About.JPG';
import about1 from '../../images/About/about2.jpg';
import about2 from '../../images/About/about3.jpg';

const AboutDetails = () => {
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
                            Opening its doors in August 2006 and situated beside the picturesque Gulshan Lake, this hospital is one of the largest private sector healthcare facilities in Bangladesh. Castle Health Care has the capacity to house over 500 patients and has 12 state of the art operation theatres to cater to the needs of varied patient base.With more than 30 clinical sub specialties, our centres of Excellence like Cardiac, Cancer, Renal, Surgical, Neuroscience, Mother & Child Health and Critical Care Centres are staffed by the most esteemed doctors in their respective fields. Since inception till date (July 2021) we have conducted 420,000 Cardiac Investigations, 55,000 Cardiac Procedures, 14,000 Heart Surgeries with 98% success rate, 39 Kidney Transplant, 295,000 Haemodialysis, 185,000 Radiation Therapy Sessions & 196,000 Health Checkups completed.At Castle Health Care, providing our patients with a trusted and compassionate environment for healthcare is central to our mission. We draw strength from our purpose, which is above all to help and to heal.</p>


                    </div>

                </div>

            </div>
            <div class="container">
                <div class="row mb-3 mt-3 ">
                    <div class="col-12 col-md-6 col-lg-6  bg-info  ">
                        <p className='text-white fw-bold fst-italic'>"Serving all people through exemplary health care, education, research and community outreach.We’re just better at making you feel better"</p>
                        <div className='d-flex'>

                            <img src={about2} className='w-25 m-3 rounded-circle' alt="" srcset="" />

                            <div className='fw-bold m-5 text-danger'>
                                <h4>Mostofa Anowar</h4>
                                <p>Head,Surgery Dept</p>
                            </div>
                        </div>

                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                        <img src={about1} className='d-block img-fluid m-0 ' alt="" srcset="" />

                    </div>

                </div>

            </div>



        </div>
    );
};

export default AboutDetails;