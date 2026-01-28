"use client";

import styles from "./VisionMision.module.css";
import { useLanguage } from "../../components/LanguageContext";

const translations = {
    en: {
        vision: "Our Vision",
        mision: "Our mision",
        descvision: "To be one of the leading contracting companies in Abu Dhabi by delivering innovative interior and architectural solutions that inspire and endure.",
        descmision: "Providing high-quality villa construction, interior design, and execution services focused on client needs, balancing beauty and functionality.",
        objective:"Vision & Mission"
    },
    ar: {
        vision: "رؤيتنـــا",
        mision: "رســالتنــا",
        descvision: "أن نكون إحدى أبرز شركات المقاولات في أبوظبي من خلال تقديم حلول مبتكرة في التصميم الداخلي والهندسة المعمارية تلهم وتدوم.",
        descmision: "تقديم خدمات عالية الجودة في بناء الفلل، التصميم الداخلي والتنفيذ مع التركيز على احتياجات العميل وتحقيق التوازن بين الجمال والوظيفة.",
        objective: "رســالتنــا & رؤيتنـــا"
    },
};

export default function VisionMission() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <div className={styles.FullvisionandMission}>
            <div className={styles.visionandMission}>
                <h2> {t.objective}</h2>
        </div>
        <div
            className={styles.visionMission}
            dir={language === "ar" ? "rtl" : "ltr"}
        >
          
            {/* Vision */}
            <div className={styles.vision}>
                <h3>{t.vision}</h3>
                <p>{t.descvision}</p>
            </div>

            {/* Mission */}
            <div className={styles.Mission}>
                <h3>{t.mision}</h3>
                <p>{t.descmision}</p>
            </div>
            </div>
        </div>
        
    );
}
