import React from 'react';
import Banner from './Banner/Banner';
import Care from './Care/Care';
import Contact from './Contact/Contact';
import Contactus from './Contactus/Contactus';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';
import MakeAppointment from "./MakeAppointment/MakeAppointment";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Contact></Contact>
            <Services></Services>
            <Care></Care>
            <MakeAppointment></MakeAppointment>
            <Reviews></Reviews>
            <Contactus></Contactus>
        </div>
    );
};

export default Home;