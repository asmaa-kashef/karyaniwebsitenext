"use client";

import styles from "./Project.module.css";
import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { useLanguage } from "../../components/LanguageContext";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const projects = [
    {
        id: "proj_1",
        category: { en: "Construction", ar: "البناء" },
        title: { en: "Villa Construction", ar: "بناء الفلل" },
        description: { en: "Luxury villa construction project with modern design", ar: "مشروع بناء فيلا فاخرة بتصميم عصري" },
        mediaType: "youtube",
        videoId: "00_cHMGz5aE", // فيديو اليوتيوب الأول
        poster: "/images/resource/StructureRepair.webp",
    },
    {
        id: "proj_2",
        category: { en: "Structure Repair", ar: "إصلاح الهياكل" },
        title: { en: "Modern Repair", ar: "ترميم حديث" },
        description: { en: "Elegant structural repair for modern buildings", ar: "ترميم أنيق للهياكل الحديثة" },
        mediaType: "youtube",
        videoId: "Y6ciIuGM06c", // فيديو الـ Shorts الذي أرسلته
        poster: "/images/resource/Interiordesign.webp",
    },
];

const translations = {
    en: { title: "Our Best Work", cta: "All Projects →", viewBtn: "View Project", quoteBtn: "Get a Quote", project: "Projects" },
    ar: { title: "أفضل أعمالنا", cta: " جميع المشاريع", viewBtn: "عرض المشروع", quoteBtn: "احصل على عرض سعر", project: "مشــاريعنـــا" },
};

export default function ProjectsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const viewportRef = useRef<HTMLDivElement>(null);
    const { language } = useLanguage();
    const t = translations[language];

    const scrollToImage = useCallback((index: number) => {
        if (viewportRef.current) {
            const width = viewportRef.current.offsetWidth;
            viewportRef.current.scrollTo({
                left: index * width,
                behavior: "smooth"
            });
        }
    }, []);

    const handleScroll = () => {
        if (viewportRef.current) {
            const { scrollLeft, offsetWidth } = viewportRef.current;
            const index = Math.round(Math.abs(scrollLeft) / offsetWidth);
            if (index !== activeIndex) {
                setActiveIndex(index);
            }
        }
    };

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            const nextIndex = (activeIndex + 1) % projects.length;
            scrollToImage(nextIndex);
        }, 5000);
        return () => clearInterval(interval);
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
                                {project.mediaType === "youtube" ? (
                                    <div className={styles.youtubeWrapper}>
                                        <LiteYouTubeEmbed
                                            id={project.videoId}
                                            title={project.title[language]}
                                            poster="hqdefault"
                                            noCookie={true}
                                        />
                                    </div>
                                ) : (
                                    <Image
                                        src={project.poster}
                                        alt={project.title[language]}
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
                                    <button
                                        className={styles.viewBtn}
                                        onClick={() => {
                                            const project = projects[activeIndex];
                                            if (project.mediaType === "youtube") {
                                                // فتح الفيديو في تاب جديد
                                                window.open(`https://www.youtube.com/watch?v=${project.videoId}`, "_blank");
                                            } else {
                                                // لو صورة أو نوع آخر ممكن تعمل حاجة تانية أو لا تعمل شيء
                                                console.log("No video to view");
                                            }
                                        }}
                                    >
                                        {t.viewBtn}
                                    </button>

                                    <button
                                        className={styles.quoteBtn}
                                        onClick={() => {
                                            const form = document.getElementById("offer-form");
                                            if (form) {
                                                form.scrollIntoView({ behavior: "smooth" });
                                            }
                                        }}
                                    >
                                        {t.quoteBtn}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

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