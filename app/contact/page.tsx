import React from "react";
import ContactBanner from "../../components/ContactBanner/ContactBanner";
import ContactServices from "../../components/ContactServices/ContactServices";
import ContactProjects from "../../components/ContactProjects/ContactProjects";
import ContactLocation from "../../components/ContactLocation/ContactLocation";
import ContactMap from "../../components/ContactMap/ContactMap";
const ContactPage = () => {
    return (
        <>
            <ContactBanner />
            <ContactServices />
            <ContactProjects />
            <ContactMap/>
            <ContactLocation />
           
  
        </>
    );
};

export default ContactPage;
