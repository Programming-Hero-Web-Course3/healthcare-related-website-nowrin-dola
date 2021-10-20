import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from '../../../images/Banner/banner1.jpg';
import banner2 from '../../../images/Banner/banner2.jpg';
import banner3 from '../../../images/Banner/banner3.jpg';

const Banner = () => {
    return (
        <div >
            <Carousel>
                <Carousel.Item className='banner'>
                    <img
                        className="d-block img-fluid m-0"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='fw-bold text-dark'>
                        <h3>Castle Health Care</h3>
                        <p>Keeping You Well</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='banner'>
                    <img
                        className="d-block img-fluid m-0"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='fw-bold text-dark'>
                        <h3>Castle Health Care</h3>
                        <p>The Heart of Your HealthCare</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='banner'>
                    <img
                        className="d-block img-fluid m-0"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='fw-bold text-dark'>
                        <h3>Castle Health Care</h3>
                        <p>Care Close to Home</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;