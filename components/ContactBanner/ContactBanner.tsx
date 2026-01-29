"use client";
import styles from "./ContactBanner.module.css"; // CSS للـ Banner
import { useLanguage } from "../../components/LanguageContext"; // عدل المسار حسب مكانك
import Image from "next/image"; 
import Link from "next/link";

const images =  "/images/background/construction.webp";
const translations = {

    en: {

        title: "Contact Us",

        desc: "Get in touch with us for a free consultation",
        Contactus: "Contact us",
        Home:"Home",
    },

    ar: {

        title: "اتصل بنا",

        desc: "تواصل معنا للحصول على استشارة مجانية",
        Contactus:"اتصل بنــا",
        Home: "الصفحة الرئيسية",

    },

};



export default function ContactBanner() {

    const { language} = useLanguage();
    const t = translations[language];

    return (

        <div className={styles.banner} dir={language === "ar" ? "rtl" : "ltr"}>
            <Image
                src={images}
                alt={`Banner`}
                fill               // ✅ هذا يجعل الصورة تغطي الحاوية
                style={{ objectFit: 'cover' }} // لتغطية كاملة بدون تشويه
                className={styles.bannerImage}
            />
         
     
            <div className={styles.textWrapper}>
                <h1>{t.title}</h1>
                <p>{t.desc}</p>
                <div className={styles.linkWrapper}>
                    <p>{t.Contactus}</p>
                    <p>-</p>
                    <Link href="/">{t.Home}</Link>

                </div>

            </div>
        </div>


    );

}