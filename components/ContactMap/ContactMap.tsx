"use client";

import { useLanguage } from "../../components/LanguageContext";
import styles from "./ContactMap.module.css";

const translations = {
    en: {
        heading: "Book your free consultation now",
        heading2: "Want to get in touch?",
        heading3: "Fill out the form",
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        address: "Address",
        servicePlaceholder: "Select Service",
        services: {
            villa: "Villa Construction",
            interior: "Interior Finishing",
            maintenance: "General Maintenance",
            aluminum: "Aluminum & Glass",
        },
        message: "Write your message here...",
        submit: "Send Message",
    },
    ar: {
        heading: "احجز استشارتك المجانية الآن",
        heading2: "هل ترغب في التواصل؟",
        heading3: "املأ النموذج",
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        address: "العنوان",
        servicePlaceholder: "اختر الخدمة",
        services: {
            villa: "بناء الفلل",
            interior: "التشطيبات الداخلية",
            maintenance: "الصيانة العامة",
            aluminum: "الألمنيوم والزجاج",
        },
        message: "اكتب رسالتك هنا...",
        submit: "إرسال الرسالة",
    },
};

export default function ContactLocation() {
    const { language } = useLanguage();
    const t = translations[language];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <div
            className={styles.FullContactLocation}
            dir={language === "ar" ? "rtl" : "ltr"}
        >
            <div className={styles.Contactform}>
                <p>{t.heading}</p>
                <p>{t.heading2}</p>
                <p>{t.heading3}</p>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <input type="text" placeholder={t.name} required />
                    <input type="email" placeholder={t.email} required />
                    <input type="text" placeholder={t.phone} />
                    <input type="text" placeholder={t.address} />

                    <select required>
                        <option value="">{t.servicePlaceholder}</option>
                        <option value="villa">{t.services.villa}</option>
                        <option value="interior">{t.services.interior}</option>
                        <option value="maintenance">{t.services.maintenance}</option>
                        <option value="aluminum">{t.services.aluminum}</option>
                    </select>

                    <textarea placeholder={t.message} />

                    <button type="submit">{t.submit}</button>
                </form>
            </div>

            <div className={styles.ContactLocation}>
                <iframe
                    src="https://www.google.com/maps?q=Alniyadi%20Building%2C%206th%20Floor%2C%20Office%20602%2C%20Airport%20Road%2C%20Abu%20Dhabi%2C%20UAE&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: "12px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    );
}
