"use client";

import styles from "./AboutBanner.module.css"; // CSS للـ Banner
import { useLanguage } from "../../components/LanguageContext"; // عدل المسار حسب مكانك
import Image from "next/image"; 
import Link from "next/link";

const images =  "/images/background/10.webp";
const translations = {

    en: {

        title: "contracting companies in abu dhabi",

        desc: "Interior design and engineering services speak for themselves",
        Home: "Home",
        Aboutus:"About us",

    },

    ar: {

        title: "شركات المقاولات في أبوظبي",

        desc: "التصميم الداخلي والخدمات الهندسية تتحدث عن نفسها",

        Home:"الصفحة الرئيسية",
        Aboutus: "مـن نــحن",
    },

};



export default function Banner() {

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
                    <p>{t.Aboutus}</p>
                    <p>-</p>
                    <Link href="/">{t.Home}</Link>
            
               

            </div>
            </div>
        </div>


    );

}