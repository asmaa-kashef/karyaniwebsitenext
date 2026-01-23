"use client";

import styles from "./Project.module.css";
import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { useLanguage } from "../../components/LanguageContext"; // عدل المسار حسب مكانك

// مصفوفة البيانات محدثة لدعم الفيديو والصور (Poster)
const projects = [
    {
        id: 1,
        category: { en: "Construction", ar: "البناء" },
        title: { en: "Villa Construction", ar: "بناء الفلل" },
        description: { en: "Luxury villa construction project with modern design", ar: "مشروع بناء فيلا فاخرة بتصميم عصري" },
        mediaType: "video",
        videoSrc: "/videos/VillaConstruction.mp4",
        poster: "/images/resource/StructureRepair.webp",
    },
    {
        id: 2,
        category: { en: "Structure Repair", ar: "إصلاح الهياكل" },
        title: { en: "Modern Repair", ar: "ترميم حديث" },
        description: { en: "Elegant structural repair for modern buildings", ar: "ترميم أنيق للهياكل الحديثة" },
        mediaType: "video",
        videoSrc: "/videos/structurerepair.mp4",
        poster: "/images/resource/Interiordesign.webp",
    },
];


const translations = {
    en: {
        title: "Our Best Work",
        cta: "All Projects →",
        viewBtn: "View Project",
        quoteBtn: "Get a Quote",
        project:"Projects",
    },
    ar: {
        title: "أفضل أعمالنا",
        cta: " جميع المشاريع",
        viewBtn: "عرض المشروع",
        quoteBtn: "احصل على عرض سعر",
        project:"مشــاريعنـــا"
    },
};

export default function ProjectsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const viewportRef = useRef<HTMLDivElement>(null);
    const { language } = useLanguage();
    const t = translations[language];

    // 1. دالة التمرير البرمجي - مستقرة بـ useCallback لتجنب أخطاء Render
    const scrollToImage = useCallback((index: number) => {
        if (viewportRef.current) {
            const width = viewportRef.current.offsetWidth;
            viewportRef.current.scrollTo({
                left: index * width,
                behavior: "smooth"
            });
        }
    }, []);

    // 2. دالة مراقبة التمرير اليدوي
    const handleScroll = () => {
        if (viewportRef.current) {
            const { scrollLeft, offsetWidth } = viewportRef.current;
            const index = Math.round(Math.abs(scrollLeft) / offsetWidth);
            if (index !== activeIndex) {
                setActiveIndex(index);
            }
        }
    };

    // 3. منطق التحريك التلقائي (Auto-play) - تم إصلاح مصفوفة الـ Dependencies
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            const nextIndex = (activeIndex + 1) % projects.length;
            scrollToImage(nextIndex);
        }, 3000); // تغيير كل 3 ثوانٍ ليناسب الفيديوهات

        return () => clearInterval(interval);
        // الترتيب هنا يجب أن يظل ثابتاً لمنع الـ Panic Error
    }, [activeIndex, isPaused, scrollToImage]);

    return (
        <section className={styles.projectsSection} dir={language === "ar" ? "rtl" : "ltr"}>
            <div className={styles.textWrapper}>
                <div className={styles.Wrapper}>
                    <span className={styles.bgText}>{t.project}</span>
                    <h2 className={styles.title}>{t.title}</h2>

                </div>
                <button className={styles.allProjectsBtn}>{t.cta}</button>
            </div>

            {/* الحاوية التي تعرض الفيديوهات */}
            <div
                className={styles.sliderViewport}
                ref={viewportRef}
                onScroll={handleScroll}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div className={styles.sliderTrack}>
                    {projects.map((project) => (
                        <div key={project.id} className={styles.projectCard}>
                            <div className={styles.mediaBox}>
                                {project.mediaType === "video" ? (
                                    <video
                                        key={project.id}
                                        className={styles.video}
                                        muted
                                        autoPlay
                                        loop
                                        playsInline
                                        poster={project.poster}
                                        onCanPlay={(e) => e.currentTarget.play()} // إجبار المتصفح على التشغيل بمجرد الجاهزية
                                    >
                                        <source src={project.videoSrc} type="video/mp4" />
                                    </video>
                                ) : (
                                    <Image
                                        src={project.poster}
                                        alt={project.title}
                                        width={800}
                                        height={500}
                                        className={styles.image}
                                    />
                                )}
                            </div>

                            <div className={styles.projectInfo}>
                                <span className={styles.category}>{project.category[language]}</span>
                                <h3 className={styles.projectTitle}>{project.title[language]}</h3>
                                <p className={styles.description}>{project.description[language]}</p>
                                <div className={styles.btnGroup}>
                                    <button className={styles.viewBtn}>{t.viewBtn}</button>
                                    <button className={styles.quoteBtn}>{t.quoteBtn}</button>
                                </div>

                            </div>
                        </div>
                    ))}
                   
                </div>
            </div>

            {/* نقاط الترقيم التفاعلية */}
            <div className={styles.dotsContainer}>
                {projects.map((_, i) => (
                    <span
                        key={i}
                        className={`${styles.dot} ${i === activeIndex ? styles.active : ""}`}
                        onClick={() => scrollToImage(i)}
                    ></span>
                ))}
            </div>
        </section>
    );
}