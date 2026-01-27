import React from "react";
import AboutBanner from "../../components/AboutBanner/AboutBanner";
import VisionMision from "../../components/VisionMision/VisionMision";
import AboutProject from "../../components/AboutProject/AboutProject";
import AboutProcess from "../../components/AboutProcess/AboutProcess";

const AboutPage = () => {
    return (
        <>
            <AboutBanner />
            <VisionMision />
            <AboutProject />
            <AboutProcess />
        </>
    );
};

export default AboutPage;
