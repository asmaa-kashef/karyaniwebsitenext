"use client";

import { useState } from "react";
import styles from "./AboutQuestion.module.css";
import { useLanguage } from "../../components/LanguageContext";

type QA = {
    question: string;
    answer: string;
};

const translations = {
    en: {
        title: "Frequently Asked Questions",
        questions: [
            {
                question: "Do you do the design and the execution yourselves?",
                answer:
                    "Yes, our in-house team handles both design and execution to ensure quality and consistency across all projects.",
            },
            {
                question: "Do you provide a warranty and after-sales service?",
                answer:
                    "We provide a 5-year warranty on workmanship and offer comprehensive after-sales support for any issues that arise.",
            },
            {
                question: "Can you provide a quote based on a floor plan?",
                answer:
                    "Absolutely! We can analyze your floor plan and provide a detailed quote tailored to your project requirements.",
            },
            {
                question: "At what stage should interior design work begin?",
                answer:
                    "Interior design work can start once the main structure is completed, allowing our designers to plan layouts, lighting, and finishes effectively.",
            },
            {
                question: "Do you charge for providing a proposal?",
                answer:
                    "No, our initial proposal and consultation are free of charge.",
            },
        ],
    },

    ar: {
        title: "الأسئلة الشائعة",
        questions: [
            {
                question: "هل تقومون بالتصميم والتنفيذ بأنفسكم؟",
                answer:
                    "نعم، فريقنا الداخلي يتولى التصميم والتنفيذ لضمان أعلى جودة وتناسق في جميع المشاريع.",
            },
            {
                question: "هل تقدمون ضمان وخدمة ما بعد البيع؟",
                answer:
                    "نقدم ضمان لمدة 5 سنوات على أعمال التنفيذ، بالإضافة إلى خدمة ما بعد البيع.",
            },
            {
                question: "هل يمكنكم تقديم عرض سعر بناءً على المخطط؟",
                answer:
                    "بالطبع، يمكننا دراسة المخطط وتقديم عرض سعر تفصيلي حسب متطلبات مشروعك.",
            },
            {
                question: "متى يجب أن يبدأ عمل التصميم الداخلي؟",
                answer:
                    "يبدأ التصميم الداخلي بعد الانتهاء من الهيكل الإنشائي لسهولة التخطيط والتنفيذ.",
            },
            {
                question: "هل هناك رسوم على تقديم المقترح؟",
                answer:
                    "لا، الاستشارة الأولية وتقديم المقترح مجانية.",
            },
        ],
    },
};

export default function AboutQuestion() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <>
            <h2 className={styles.TextQuestion}>{t.title}</h2>

            <div
                className={styles.FullAboutQuestion}
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <div className={styles.AboutQuestion}>
                    {t.questions.map((qa: QA, index: number) => (
                        <Card
                            key={index}
                            question={qa.question}
                            answer={qa.answer}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

function Card({ question, answer }: QA) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div
            className={`${styles.Card} ${expanded ? styles.expanded : ""
                }`}
            onClick={() => setExpanded(!expanded)}
        >
            <p className={styles.question}>{question}</p>
            <p className={styles.answer}>{answer}</p>
        </div>
    );
}
