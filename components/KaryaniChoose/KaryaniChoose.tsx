"use client";

import { useState } from "react";
import styles from "./KaryaniChoose.module.css";
import { useLanguage } from "../../components/LanguageContext";

const translations = {
    en: {
        mainTitle: "Why Choose Karyani House?",
        services: [
            "We are a leading construction company in Abu Dhabi with a proven record of successful projects.",
            "Client first: precise follow-up at each stage with continuous updates.",
            "Specialized engineering team combining expertise and precision",
            "Integrated solutions from design to execution and finishing.",
            "On-time delivery with reliable and fast service.",
            "Use of the latest technologies for accurate and efficient results."
        ],
        moreText: `Contact us and start your project now.
If you are looking for the best construction company in Abu Dhabi to build your villa or renovate your building, don’t hesitate to reach out.
Call us directly to get a free consultation and a detailed quotation.

With Karyani House, your project is in safe hands. We guarantee that every detail of construction and maintenance is handled with the highest quality and professionalism.`,
        readMore: "Read More",
        readLess: "Read Less"
    },
    ar: {
        mainTitle: "لماذا تختار شركة كرياني هاوس؟",
        services: [
            "نحن شركة مقاولات رائدة في أبوظبي بسجل حافل من المشاريع الناجحة.",
            "العميل أولاً: متابعة دقيقة في كل مرحلة مع تحديثات مستمرة.",
            "فريق هندسي متخصص يجمع بين الخبرة والدقة",
            "حلول متكاملة من التصميم حتى التنفيذ والتشطيبات.",
            "التسليم في الوقت المحدد مع خدمة موثوقة وسريعة.",
            "استخدام أحدث التقنيات لتحقيق نتائج دقيقة وفعّالة."
        ],
        moreText: `تواصل معنا وابدأ مشروعك الآن.
إذا كنت تبحث عن أفضل شركة مقاولات في أبوظبي لبناء فيلتك أو تجديد المبنى الخاص بك، لا تتردد في التواصل.
اتصل بنا مباشرة للحصول على استشارة مجانية وعرض سعر مفصل.

مع شركة كرياني هاوس، مشروعك في أيدٍ أمينة. نضمن أن كل تفصيلة من البناء والصيانة تتم بأعلى معايير الجودة والاحترافية.`,
        readMore: "اقرأ المزيد",
        readLess: "اقرأ أقل"
    }
};

const KaryaniChoose = () => {
    const [showMore, setShowMore] = useState(false);
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

                {showMore && (
                    <p className={styles.paragraph}>{t.moreText}</p>
                )}

                <div className={styles.buttonWrapper}>
                    <button
                        className={styles.button}
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? t.readLess : t.readMore}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default KaryaniChoose;
