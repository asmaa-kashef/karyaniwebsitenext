"use client";

import { useLanguage } from "../../components/LanguageContext";
import styles from "./ContactProjects.module.css"; // CSS للـ Banner
import Link from "next/link";
type Project = {
    title: string;
    desc: string;
}

const translations = {
    en: {
        title: "Our Projects",
        Projects: [
            {
                title: "Villa Construction",
                desc:
                    "Expertly crafting luxurious villas with precision, attention to detail, and high-quality materials to bring your dream home to life.",
            },
            {
                title: "Structure Repair",
                desc:
                    "Reliable structural repair solutions to ensure safety, durability, and long-lasting performance for every building.",
            },
          
            
        ],
        btn: "view projects"
    },
    ar: {
        title: "مشاريعنا",
        Projects: [
            
            {
                title: "تصليح الهياكل",
                desc:
                    "حلول موثوقة لتصليح الهياكل لضمان السلامة والمتانة والأداء الطويل الأمد لكل مبنى.",
            },
            {
                title: "بناء الفــلل",
                desc:"تنفيذ فيلات فاخرة بدقة عالية، مع الاهتمام بالتفاصيل واستخدام أفضل المواد لكل مبنى "
            },
            
        ],
        btn: "عرض المشاريع"
    },
};

export default function AboutProject() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <div className={styles.FullAboutProject} dir={language === "ar" ? "rtl" : "ltr"}>
            <h2>{t.title}</h2>
            <div className={styles.AboutProject}>
                {t.Projects.map((Pro: Project, index: number) => (
                    <div className={styles.card} key={index}>
                        <div className={styles.text}>
                            <h3>{Pro.title}</h3>
                            <p>{Pro.desc}</p>
                            <Link href="/project" className={styles.btn}>
                                {t.btn}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
