"use client";

import { useLanguage } from "../../components/LanguageContext";
import styles from "./ContactLocation.module.css";

type Service = {
    title: string;
    desc: string;
};

const translations = {
    en: {
        title: "Our Contacts",
        services: [
            {
                title: "Location",
                desc: "Alniyadi Building, 6th Floor, Office 602 Airport Road, Abu Dhabi, UAE",
            },
            {
                title: "Call Us",
                desc: "+971 50 660 7159",
            },
            {
                title: "Email",
                desc: "info@karyani-house.com",
            },
        ],
    },
    ar: {
        title: "وسـائل التــواصل",
        services: [
            {
                title: "الموقع",
                desc: "مبنى النيادي، الطابق السادس، مكتب 602، شارع المطار، أبوظبي، الإمارات",
            },
            {
                title: "اتصل بنا",
                desc: "+971 50 660 7159",
            },
            {
                title: "البريد الإلكتروني",
                desc: "info@karyani-house.com",
            },
        ],
    },
};

export default function AboutServices() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <div
            className={styles.FullAboutServices}
            dir={language === "ar" ? "rtl" : "ltr"}
        >
            <h2>{t.title}</h2>

            <div className={styles.AboutServices}>
                {t.services.map((serv: Service, index: number) => {
                    const isPhone =
                        serv.title.toLowerCase().includes("call") ||
                        serv.title.includes("اتصل");

                    const isEmail =
                        serv.title.toLowerCase().includes("email") ||
                        serv.title.includes("البريد");

                    return (
                        <div className={styles.card} key={index}>
                            <div
                                className={styles.text}
                                style={{ textAlign: language === "ar" ? "right" : "left" }}
                            >
                                <h3>{serv.title}</h3>

                                {isPhone ? (
                                    <a href={`tel:${serv.desc}`} className={styles.link}>
                                        {serv.desc}
                                    </a>
                                ) : isEmail ? (
                                    <a
                                        href={`mailto:${serv.desc}`}
                                        className={styles.link}
                                    >
                                        {serv.desc}
                                    </a>
                                ) : (
                                    <p>{serv.desc}</p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
