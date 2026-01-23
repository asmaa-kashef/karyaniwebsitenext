"use client";

import styles from './ConstructionServices.module.css';
import { useLanguage } from "../../components/LanguageContext";

const translations = {
    en: {
        mainTitle: <>Our Villa <span className={styles.highlight}>Construction Services</span></>,
        introText: "We provide a complete villa construction experience in Abu Dhabi, including:",
        services: [
            "Luxury villa design and construction following the highest international quality standards, paying attention to every detail in rooms, outdoor spaces, and finishing, to ensure a home that reflects your unique taste and exceeds expectations.",
            "Use of advanced building materials and modern technologies ensuring durability and sustainability of the building over time, with the best insulation and finishing systems to guarantee comfort and safety throughout the year.",
            "Close supervision at every stage with a specialized engineering team, ensuring precise and professional execution with regular client updates on project progress.",
            "Custom designs according to client preferences, with innovative suggestions to beautify interior and exterior spaces according to your lifestyle and practical requirements.",
            "Successful past project examples demonstrating our ability to deliver world-class villas, making us the perfect choice for those seeking excellence and quality."
        ]
    },
    ar: {
        mainTitle: <>خدمات <span className={styles.highlight}>بناء الفلل</span> الخاصة بنا</>,
        introText: "نقدم تجربة كاملة لبناء الفلل في أبوظبي، تشمل:",
        services: [
            "تصميم وبناء فيلات فاخرة وفق أعلى معايير الجودة العالمية، مع الاهتمام بكل التفاصيل في الغرف والمساحات الخارجية والتشطيبات لضمان منزل يعكس ذوقك الفريد ويتجاوز التوقعات.",
            "استخدام مواد بناء متقدمة وتقنيات حديثة تضمن متانة واستدامة المبنى على المدى الطويل، مع أفضل أنظمة العزل والتشطيبات لضمان الراحة والسلامة طوال العام.",
            "إشراف دقيق في كل مرحلة بواسطة فريق هندسي متخصص، لضمان تنفيذ دقيق واحترافي مع تحديثات منتظمة للعميل حول تقدم المشروع.",
            "تصاميم مخصصة وفقًا لتفضيلات العميل، مع اقتراحات مبتكرة لتجميل المساحات الداخلية والخارجية وفقًا لأسلوب حياتك والمتطلبات العملية.",
            "أمثلة لمشاريع سابقة ناجحة تُظهر قدرتنا على تقديم فلل عالمية المستوى، مما يجعلنا الخيار الأمثل لمن يسعى للتميز والجودة."
        ]
    }
};

const VillaServices = () => {
    const { language } = useLanguage();
    const t = translations[language];
 

    return (
        <div className={styles.container} dir={language === "ar" ? "rtl" : "ltr"}>
            <div
                className={styles.contentWrapper}
                dir={language === "ar" ? "rtl" : "ltr"}
                style={{ textAlign: language === "ar" ? "right" : "left" }}
            >

                <h1 className={styles.mainTitle}>{t.mainTitle}</h1>
                <p className={styles.introText}>{t.introText}</p>

                <ul className={styles.servicesList}>
                    {t.services.map((service, idx) => (
                        <li key={idx} className={styles.serviceItem}>{service}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default VillaServices;
