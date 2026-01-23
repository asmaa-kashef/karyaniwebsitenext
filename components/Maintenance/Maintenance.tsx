"use client";

import styles from "./Maintenance.module.css";
import { useLanguage } from "../../components/LanguageContext";

const translations = {
    en: {
        mainTitle: "Maintenance & Renovation Services",
        services: [
            "We don’t just build, we also provide comprehensive maintenance and renovation services:",
            "Full building maintenance to ensure long-term durability.",
            "Repair cracks and reinforce structures for safety.",
            "Renovating façades for a modern, elegant look.",
            "Customized services for residential and commercial buildings.",
            "Post-delivery support and consultations for long-term satisfaction.",
            "Choosing Karyani House ensures professional services on time with the highest quality standards."
        ]
    },
    ar: {
        mainTitle: "خدمات الصيانة والتجديد",
        services: [
            "لا نقدم البناء فقط، بل نوفر أيضًا خدمات صيانة وتجديد شاملة:",
            "صيانة كاملة للمبنى لضمان المتانة على المدى الطويل.",
            "إصلاح الشقوق وتعزيز الهياكل لضمان السلامة.",
            "تجديد الواجهات للحصول على مظهر عصري وأنيق.",
            "خدمات مخصصة للمباني السكنية والتجارية.",
            "دعم ومتابعة بعد التسليم لضمان رضا طويل الأمد.",
            "اختيار شركة كرياني هاوس يضمن خدمات احترافية في الوقت المحدد وبأعلى معايير الجودة."
        ]
    }
};

const Maintenance = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const direction = language === "ar" ? "rtl" : "ltr";

    return (
        <div className={styles.container} dir={direction}>
            <div className={styles.contentWrapper}>
                <h1 className={styles.mainTitle}>{t.mainTitle}</h1>

                <ul className={styles.servicesList}>
                    {t.services.map((service, idx) => (
                        <li key={idx} className={styles.serviceItem}>{service}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Maintenance;
