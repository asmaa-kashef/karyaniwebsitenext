import React from "react";
import AboutBanner from "../../components/AboutBanner/AboutBanner";
import VisionMision from "../../components/VisionMision/VisionMision";
import AboutProject from "../../components/AboutProject/AboutProject";
import AboutProcess from "../../components/AboutProcess/AboutProcess";
import AboutQuestion from "../../components/AboutQuestion/AboutQuestion";
import AboutEngineer from "../../components/AboutEngineer/AboutEngineer";

const AboutPage = () => {
    return (
        <>
            <AboutBanner />
            <VisionMision />
            <AboutProject />
            <AboutProcess />
            <AboutQuestion />
            <AboutEngineer />
          
        </>
    );
};

export default AboutPage;
