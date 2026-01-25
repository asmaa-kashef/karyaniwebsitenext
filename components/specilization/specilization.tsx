"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "../../components/LanguageContext"; // عدل المسار حسب مكانك
import styles from "./Specialization.module.css";

// تعريف النوع للغة
type Language = "en" | "ar";

// النوع للنصوص القابلة للترجمة
type TranslatableText = {
    en: string;
    ar: string;
};

// تعريف الكروت
type Service = {
    id: number;
    title: TranslatableText;
    desc: TranslatableText;
    img: string;
};

const servicesData: Service[] = [
    {
        id: 1,
        title: { en: "Villa Construction", ar: "بناء الفلل" },
        desc: { en: "Premium villa construction services with quality and precision.", ar: "خدمات بناء فلل مميزة بجودة ودقة عالية." },
        img: "/images/resource/cladding.webp"
    }
    ,
    {
        id: 2,
        title: { en: "Structural Works", ar: "الأعمال الهيكلية" },
        desc: { en: "Expert structural engineering and construction solutions.", ar: "حلول هندسية وإنشائية متخصصة." },
        img: "/images/resource/Alumnum.webp"
    }
    ,
    {
        id: 3,
        title: { en: "Aluminium And Glass", ar: "الألومنيوم والزجاج" },
        desc: { en: "Professional aluminium and glass solutions in Abu Dhabi.", ar: "حلول محترفة للألومنيوم والزجاج في أبوظبي." },
        img: "/images/resource/VillaConstruction.webp"
    },
    {
        id: 4,
        title: { en: "Interior Design", ar: "تصميم داخلي" },
        desc: { en: "Creative interior design services for villas and commercial spaces.", ar: "خدمات تصميم داخلي مبتكرة للفيلات والمساحات التجارية." },
        img: "/images/resource/StructureRepair.webp"
    },
    {
        id: 5,
        title: { en: "Renovation", ar: "تجديد وترميم" },
        desc: { en: "Complete home and office renovation services.", ar: "خدمات كاملة لتجديد المنازل والمكاتب." },
        img: "/images/resource/Interiordesign.webp"
    },
];

export default function SpecializationSlider() {
    const { language } = useLanguage() as { language: Language }; // ضمان النوع

    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // دالة لحساب عرض الكارت + المسافة بين الكروت
    const getCardWidth = () => {
        if (scrollRef.current && scrollRef.current.children[0]) {
            return (scrollRef.current.children[0] as HTMLElement).offsetWidth + 20;
        }
        return 0;
    };

    // تحديد الكارت الحالي عند السحب
    const handleScroll = () => {
        if (scrollRef.current) {
            const cardWidth = getCardWidth();
            if (cardWidth > 0) {
                // التعديل: Math.abs لتحويل الرقم السالب في العربية لموجب
                const scrollPos = language === "ar"
                    ? Math.abs(scrollRef.current.scrollLeft)
                    : scrollRef.current.scrollLeft;

                const index = Math.round(scrollPos / cardWidth);

                if (index !== activeIndex) {
                    setActiveIndex(Math.min(index, servicesData.length - 1));
                }
            }
        }
    };

    // السلايدر التلقائي
    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                const cardWidth = getCardWidth();
                const nextIndex = (activeIndex + 1) % servicesData.length;

                // التعديل: تحديد الهدف بناءً على اللغة (سالب للعربي، موجب للإنجليزي)
                const scrollTarget = language === "ar"
                    ? -(nextIndex * cardWidth)
                    : (nextIndex * cardWidth);

                scrollRef.current.scrollTo({
                    left: scrollTarget,
                    behavior: "smooth",
                });
                setActiveIndex(nextIndex);
            }
        }, 1500); // 3000ms أفضل للأداء وتجربة المستخدم

        return () => clearInterval(interval);
    }, [activeIndex, language]); // أضفنا language هنا لضمان استجابة السلايدر لتغيير اللغة فوراً

    const scrollToIndex = (index: number) => {
        if (scrollRef.current) {
            const cardWidth = getCardWidth();

            // التعديل: تحديد الاتجاه بناءً على اللغة
            const scrollTarget = language === "ar"
                ? -(index * cardWidth)
                : (index * cardWidth);

            scrollRef.current.scrollTo({
                left: scrollTarget,
                behavior: "smooth",
            });
            setActiveIndex(index);
        }
    };

    return (
        <section className={styles.section} aria-labelledby="specialization-title">
            <h2 id="specialization-title" className={styles.title}>
                {language === "ar"
                    ? "تخصصنا | أفضل شركات البناء في أبوظبي"
                    : "Our Specialization | Top Construction Companies in Abu Dhabi"}
            </h2>

            <div className={styles.fullContainer}>
                <div
                    className={styles.sliderContainer}
                    ref={scrollRef}
                    onScroll={handleScroll}
                    style={{ direction: language === "ar" ? "rtl" : "ltr" }} // دعم RTL
                >
                    {servicesData.map((service) => (
                        <article key={service.id} className={styles.card}>
                            <div className={styles.imageBox}>
                                <Image
                                    src={service.img}
                                    alt={service.title[language]}
                                    fill
                                    sizes="(max-width: 768px) 250px, (max-width: 1200px) 200px, 200px"
                                    className={styles.actualImage}
                                    loading="lazy"
                                />
                            </div>
                            <div className={styles.content}>
                                <h3>{service.title[language]}</h3>
                                <p>{service.desc[language]}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <div className={styles.dots}>
                {servicesData.map((_, i) => (
                    <span
                        key={i}
                        className={i === activeIndex ? styles.activeDot : styles.dot}
                        onClick={() => scrollToIndex(i)}
                    />
                ))}
            </div>
            <div
                className={styles.text}
                style={{
                    direction: language === "ar" ? "rtl" : "ltr",
                    textAlign: language === "ar" ? "right" : "left",
                }}
            >
                {language === "ar"
                    ? <>
                        <strong>تبحث عن أفضل شركات المقاولات في أبوظبي</strong> لتنفيذ مشروعك بأعلى جودة واحترافية؟ <strong>كرياني هاوس</strong> هي شركتك المثالية. نحن متخصصون في <strong>بناء الفلل الحديثة والفاخرة</strong>، وتقديم <strong>حلول الصيانة والترميم الشاملة للمباني</strong>، بدءًا من <strong>تصميم الهيكل</strong> وحتى <strong>التشطيبات النهائية</strong>. خبرتنا الطويلة وفريقنا المتميز يضمنان لك تنفيذ مشروعك بطريقة <strong>متقنة</strong> تلبي كل توقعاتك وتجعلك راضيًا تمامًا عن النتيجة، مع الالتزام بأعلى <strong>معايير السلامة والجودة</strong>.
                    </>
                    : <>
                        Looking for the <strong>top construction companies in Abu Dhabi</strong> to execute your project with the highest quality and professionalism? <strong>Karyani House</strong> is your ideal partner. We specialize in <strong>modern and luxury villa construction</strong>, providing <strong>comprehensive building maintenance and renovation solutions</strong>, from <strong>structural design</strong> to <strong>finishing touches</strong>. Our extensive experience and skilled team ensure your project is executed <strong>meticulously</strong>, meeting all your expectations and leaving you fully satisfied, while adhering to the highest <strong>safety and quality standards.</strong>
                    </>
                }
            </div>



        </section>
    );
}
