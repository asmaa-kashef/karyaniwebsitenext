"use client";

import styles from "./thank-you.module.css";
import { useLanguage } from "../../components/LanguageContext";
import Link from "next/link";

const translations = {
    en: {
        thankYou: "Thank you",
        message: "We received your request and will contact you soon.",
        callUs: "Call us",
        phone: "+9710506607159",
    },
    ar: {
        thankYou: "شكراً لك",
        message: "لقد استلمنا طلبك وسنتواصل معك قريبًا.",
        callUs: "اتصل بنا",
        phone: "+9710506607159",
    },
};

export default function Thanks() {
    const { language } = useLanguage();
    const t = translations[language] || translations.en;

    return (
        <div className={styles.FullThanks}>
            <div className={styles.Thanks}>
                <h2>{t.thankYou}</h2>
                <p>{t.message}</p>
                <p>{t.callUs}</p>
                <Link href={`tel:${t.phone}`}>{t.phone}</Link>
            </div>
        </div>
    );
}
