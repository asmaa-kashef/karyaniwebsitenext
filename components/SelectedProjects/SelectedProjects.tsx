"use client";
import { useState } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import styles from "./SelectedProjects.module.css";
import { useLanguage } from "../../components/LanguageContext"; // عدل المسار حسب مكانك

type Member = {
    video: string;
    title: { en: string; ar: string };
    desc: { en: string; ar: string };
    date: string;
};

const translations = {
    en: {
        title: "Exclusive Tour of Our Selected Projects",
        villa: "Villa Construction",
        repair: "Structure Repair",
        cladding: "Cladding",
        noVideo: "No video available for this category",
    },
    ar: {
        title: "جولة حصرية في بعض من مشاريعنا المميزة",
        villa: "بناء الفلل",
        repair: "ترميم الهياكل",
        cladding: "أعمال الكسوة",
        noVideo: "لا يوجد فيديوهات متاحة لهذا القسم",
    },
};

export default function SelectedProjects() {
    const [activeCategory, setActiveCategory] = useState("villa");
    const { language } = useLanguage();
    const t = translations[language];


    // Data-driven videos
    const videosByCategory: Record<string, Member[]> = {
        villa: [
            {
                video: "00_cHMGz5aE",
                title: {
                    en: "Villa Construction 1",
                    ar: "بناء فيلا فاخرة 1",
                },
                desc: {
                    en: "Luxury villa construction",
                    ar: "أعمال بناء فيلا فاخرة بمعايير عالية",
                },
                date: "2025-01-01",
            },
            {
                video: "8HBZdEbywE4",
                title: {
                    en: "Villa Construction 2",
                    ar: "بناء فيلا حديثة",
                },
                desc: {
                    en: "Modern villa building",
                    ar: "تنفيذ فيلا حديثة بتصميم عصري",
                },
                date: "2025-01-02",
            },
            {
                video: "ngxg4FNq2Sg",
                title: {
                    en: "Villa Construction 3",
                    ar: "مشروع فيلا عالية الجودة",
                },
                desc: {
                    en: "High-quality villa project",
                    ar: "مشروع فيلا يتم تنفيذها بمعايير جودة عالية",
                },
                date: "2025-01-03",
            },
        ],

        // باقي الكاتيجوري:
        repair: [
            {
                video: "Y6ciIuGM06c",
                title: { en: "Structure Repair", ar: "ترميم الهياكل" },
                desc: { en: "Structural repair and renovation", ar: "إصلاح وترميم الهياكل" },
                date: "2025-01-04",
            },
        ],
        cladding: [],
    };


    const members = videosByCategory[activeCategory] || [];

    return (
        <div dir={language === "ar" ? "rtl" : "ltr"}>
            {/* Title */}
            <h2 className={styles.title}>
                {t.title}
            </h2>


            {/* Category Buttons */}
            <div className={styles.buttonwrapper}>
                <button
                    className={styles.button}
                    onClick={() => setActiveCategory("villa")}
                >
                    {t.villa}

                </button>

                <button
                    className={styles.button}
                    onClick={() => setActiveCategory("repair")}
                >
                    {t.repair}
                </button>

                <button
                    className={styles.button}
                    onClick={() => setActiveCategory("cladding")}
                >
                    {t.cladding}
                </button>
            </div>

            {/* Videos Wrapper */}
            <div className={styles.wrapper}>
                {members.length === 0 ? (
                    <div className={styles.noVideo}>
                        <p>{t.noVideo}</p>
                    </div>
                ) : (
                    members.map((member, idx) => (
                        <div className={styles.box} key={idx}>
                            <LiteYouTubeEmbed
                                id={member.video}
                                title={member.title[language]}
                                poster="hqdefault"
                                webp
                                noCookie
                                style={{ width: "100%", height: "350px", borderRadius: "12px" }}
                            />
                            <div className={styles.content}>
                                <div className={styles.textContent}>
                                    <h4>{member.title[language]}</h4>
                                    <p>{member.desc[language]}</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* JSON-LD for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "VideoGallery",
                        name: "Karyani House Projects",
                        description: "A showcase of Karyani House's luxury villa construction, structure repair, and cladding projects.",
                        video: members.map((v) => ({
                            "@type": "VideoObject",
                            name: v.title,
                            description: v.desc,
                            thumbnailUrl: "https://example.com/images/video-thumb.jpg",
                            uploadDate: v.date,
                            contentUrl: `https://www.youtube.com/watch?v=${v.video}`,
                            embedUrl: `https://www.youtube.com/embed/${v.video}`,
                        })),
                    }),
                }}
            />
        </div>
    );
}
