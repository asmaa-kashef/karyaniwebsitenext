"use client";

import { useLanguage } from "../../components/LanguageContext";
import styles from "./ContactServices.module.css"; // CSS للـ Banner

type service = {
    title: string;
    desc: string;
}

const translations = {
    en: {
        title: "Our Services",
        services: [
            {
                title: "Villa Construction",
                desc:
                    "Expertly crafting luxurious villas with precision, attention to detail, and high-quality materials to bring your dream home to life.",
            },
            {
                title: "Structure Repair",
                desc:
                    "Reliable structural repair solutions to ensure safety, durability, and long-lasting performance for every building.",
            },
            {
                title: "Cladding Solutions",
                desc:
                    "Innovative cladding designs and expert installation to enhance both aesthetics and protection of your property.",
            },
        ],
    },
    ar: {
        title: "خدماتنــا",
        services: [
            {
                title: "بناء الفيلات",
                desc:
                    "تنفيذ فيلات فاخرة بدقة عالية، مع الاهتمام بالتفاصيل واستخدام أفضل المواد لتحقيق منزل أحلامك.",
            },
            {
                title: "تصليح الهياكل",
                desc:
                    "حلول موثوقة لتصليح الهياكل لضمان السلامة والمتانة والأداء الطويل الأمد لكل مبنى.",
            },
            {
                title: "حلول التكسية (Cladding)",
                desc:
                    "تصاميم مبتكرة للتكسية وتركيب احترافي لتعزيز الجمال والحماية لممتلكاتك.",
            },
        ],
    },
};

export default function AboutServices() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <div className={styles.FullAboutServices} dir={language === "ar" ? "rtl" : "ltr"}>
            <h2>{t.title}</h2>
            <div className={styles.AboutServices}>
                {t.services.map((serv: service, index: number) => (
                    <div className={styles.card} key={index}>
                        <div className={styles.text} style={{ textAlign: language === "ar" ? "right" : "left" }}>
                            <h3>{serv.title}</h3>
                            <p>{serv.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
