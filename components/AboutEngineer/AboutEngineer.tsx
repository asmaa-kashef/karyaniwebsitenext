"use client";

import { useLanguage } from "../../components/LanguageContext";
import styles from "./AboutEngineer.module.css"; // CSS للـ Banner
import Image from "next/image";

type Engineer = {
    name: string;
    title: string;
    description: string;
    image: string;
    alt: string;
};

const translations = {
    en: {
        title: "Meet Our Engineer",
        engineers: [
            {
                name: "Engineer 1",
                title: "Expertise & Vision",
                description:
                    "Innovative thinking and precise planning for modern construction challenges.",
                image: "/images/resource/Eng1.webp",
                alt: "construction Engineer",
            },
            {
                name: "Engineer 2",
                title: "Smart Execution",
                description:
                    "Efficient delivery with a focus on safety, quality, and long-term performance.",
                image: "/images/resource/Eng2.webp",
                alt: "Civil Engineer",
            },
        ],
    },
    ar: {
        title: "تعرف على مهندسنا",
        engineers: [
            {
                name: "المهندس 1",
                title: "الخبرة والرؤية",
                description:
                    "تفكير مبتكر وتخطيط دقيق لمواجهة تحديات البناء الحديثة.",
                image: "/images/resource/Eng1.webp",
                alt: "مهندس إنشائي",
            },
            {
                name: "المهندس 2",
                title: "تنفيذ ذكي",
                description:
                    "تنفيذ فعال مع التركيز على السلامة والجودة والأداء طويل الأمد.",
                image: "/images/resource/Eng2.webp",
                alt: "مهندس مدني",
            },
        ],
    },
};

export default function AboutEngineer() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <div className={styles.FullAboutEngineer} dir={language === "ar" ? "rtl" : "ltr"}>
            <h2>{t.title}</h2>
            <div className={styles.AboutEngineer}>
                {t.engineers.map((eng: Engineer, index: number) => (
                    <div className={styles.card} key={index}>
                        <Image
                            src={eng.image}
                            alt={eng.alt}
                            width={600}
                            height={700}
                            className={styles.ProjectImage}
                        />
                        <div className={styles.text}>
                            <h3>{eng.name}</h3>
                            <h4>{eng.title}</h4>
                            <p>{eng.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
