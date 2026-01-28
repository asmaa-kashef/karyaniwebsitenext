"use client";

import Image from "next/image";
import styles from "./AboutProject.module.css";
import { useLanguage } from "../../components/LanguageContext"; // عدل المسار حسب مكانك

import Link from "next/link";
const translations = {

    en: {

        title: "Any Project For Any Scale",

        desc: "Karyani House, one of the leading contracting companies in Abu Dhabi, specializes in villa construction, interior design, renovation, and maintenance services across the UAE. We provide expert services in structural repair, cladding, aluminum and glass works, interior finishing, and custom construction solutions.",
        obj1: "Looking for trusted contracting companies in Abu Dhabi? Start your project with us today",
        obj2: "Want to renovate or build your villa? Talk to our experts now",
        obj3: "Need tailored construction solutions? Request a free consultation.",
        btn:"Explore about project"
    },

    ar: {

        title: "ننفذ المشاريع على اختلاف أحجامها",

        desc: "كرياني هاوس، إحدى شركات المقاولات الرائدة في أبوظبي، متخصصة في بناء الفلل، التصميم الداخلي، التجديد وأعمال الصيانة في جميع أنحاء دولة الإمارات العربية المتحدة. نقدم خدمات احترافية في إصلاح الهياكل، تكسية الواجهات، أعمال الألمنيوم والزجاج، التشطيبات الداخلية، وحلول البناء المخصصة",

        obj1:"تبحث عن أفضل شركات المقاولات في أبوظبي؟ ابدأ مشروعك معنا اليوم.",
        obj2: "هل ترغب في تجديد أو بناء فيلتك؟ تواصل مع خبرائنا الآن",
        obj3: "تحتاج إلى حلول بناء مخصصة؟ احجز استشارة مجانية",
        btn: "استكشف مشروعاتنا"

    },

};
export default function AboutProject() {
    const { language} = useLanguage();
    const t = translations[language];
    return (
        <div className={styles.AboutProject} dir={language === "ar" ? "rtl" : "ltr"}>
        <div className={styles.AboutProjectimage}>
            <Image
                src="/images/main-slider/alphabet-image.png"
                alt="Banner"
                width={600}
                height={700}
                className={styles.ProjectImage}
               
            />
                <div className={styles.textProject}>
                    <h2> {t.title}</h2>
                    <p>{t.desc}</p>
                    <ul className={styles.textProjectul}>
                        <li>{t.obj1}</li>
                        <li>{t.obj2}</li>
                        <li>{t.obj3}</li>
                    </ul>
                    <Link href="/project" className={styles.btn}>
                        {t.btn}
                    </Link>

        </div>
        </div>
        </div>
    );
}
