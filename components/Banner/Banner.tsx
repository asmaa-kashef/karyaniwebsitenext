"use client";
import { useState, useEffect } from "react";
import Image from "next/image"; // استيراد مكون الصور من نكست
import styles from "./Banner.module.css";
import Link from 'next/link';
import { useLanguage } from "../../components/LanguageContext";

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
    const { language } = useLanguage();

    const t = translations[language];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.banner} dir={language === "ar" ? "rtl" : "ltr"}>
            {/* التعديل هنا: استخدام Image مع priority */}
            <Image
                src={images[currentIndex]}
                alt={`Banner ${currentIndex + 1}`}
                className={styles.bannerImage}
                fill // ليأخذ حجم الـ container (تأكد أن الـ .banner في الـ CSS لديه position: relative)
                priority={true} // هذا هو مفتاح تحسين الـ LCP والـ Performance
                style={{ objectFit: 'cover' }} // للحفاظ على أبعاد الصورة بدون تمطيط
                sizes="100vw"
            />

            <div className={styles.buttonWrapper} style={{ zIndex: 1 }}>
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