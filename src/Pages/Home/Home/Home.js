import React from 'react';
import About from '../../About/About';
import Doctors from '../../Doctors/Doctors/Doctors';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Doctors></Doctors>



        </div>
    );
};

export default Home;