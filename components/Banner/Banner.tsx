"use client";

import { useState, useEffect } from "react";

import styles from "./Banner.module.css"; // CSS للـ Banner

import Link from 'next/link';

import { useLanguage } from "../../components/LanguageContext"; // عدل المسار حسب مكانك
import Image from "next/image"; 


// مصفوفة الصور

const images = [

    "/images/main-slider/VillaConstruction.webp",

    "/images/main-slider/cladding.webp",

    "/images/main-slider/structure.webp",

];

const translations = {

    en: {

        title: "Construction Companies in Abu Dhabi",

        cta: "Get a Free Quote",

        services: [

            "Villa Construction",

            "Structure Repair",

            "Cladding",

        ],

    },

    ar: {

        title: "شركات مقاولات في أبوظبي",

        cta: "احصل على عرض سعر مجاني",

        services: [

            "بناء الفلل",

            "إصلاح الهياكل",

            "أعمال التكسية",

        ],

    },

};



export default function Banner() {

    const { language, setLanguage } = useLanguage();



    const t = translations[language];

    const [currentIndex, setCurrentIndex] = useState(0);



    useEffect(() => {

        const interval = setInterval(() => {

            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

        }, 3000); // كل 3 ثواني الصورة تتغير



        return () => clearInterval(interval); // تنظيف الـ interval عند unmount

    }, []);



    return (

        <div className={styles.banner} dir={language === "ar" ? "rtl" : "ltr"}>
            <Image
                src={images[currentIndex]}
                alt={`Banner ${currentIndex + 1}`}
                fill               // ✅ هذا يجعل الصورة تغطي الحاوية
                style={{ objectFit: 'cover' }} // لتغطية كاملة بدون تشويه
                className={styles.bannerImage}
            />
            <div className={styles.buttonWrapper}>
                <Link href="#offer-form" className={styles.button}>
                    {t.cta}
                </Link>

                <h1>{t.title}</h1>

                {t.services.map((service, index) => (
                    <p key={index}>{service}</p>
                ))}
            </div>
        </div>


    );

}