"use client";
import React from "react";
import styles from "./Form.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormData } from "./schema"; // استيراد السكيما والنوع
import { useLanguage } from "../LanguageContext"; // عدلي المسار حسب مشروعك

export default function OfferForm() {
    const { language } = useLanguage(); // قراءة اللغة
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            const sheetURL =
                "https://script.google.com/macros/s/AKfycbxrUcITfQZSkhsobRC6eoVgHaGaozHJPqDsOljwYvZeUC_6gN4UkoNvwCJ137uGqp3lXA/exec";

            const formData = new URLSearchParams();
            formData.append("firstname", data.FirstName);
            formData.append("lastname", data.LastName);
            formData.append("Email", data.Email);
            formData.append("PhoneNumber", data.Phone);
            formData.append("Subject", data.Subject);
            formData.append("Message", data.Message);

            await fetch(sheetURL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formData.toString(),
            });

            alert(language === "ar" ? "تم الإرسال بنجاح!" : "Success! Data sent to your sheet.");
            reset();
        } catch (error) {
            alert(language === "ar" ? "حدث خطأ، حاول مرة أخرى." : "Error, please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            className={styles.Fullcontainer}
            style={{
                direction: language === "ar" ? "rtl" : "ltr",
                textAlign: language === "ar" ? "right" : "left",
            }}
        >
            <div className={styles.text}>
                <p className={styles.subtitle}>
                    {language === "ar" ? "احجز استشارتك المجانية الآن" : "Book your free consultation now"}
                </p>

                <h2 className={styles.title}>
                    <span>{language === "ar" ? "هل تريد التواصل؟" : "Want to get in touch?"}</span>
                    <br />
                    {language === "ar" ? "املأ النموذج" : "Fill out the form"}
                </h2>

                <h3 className={styles.paragraph}>
                    {language === "ar" ? "وسوف نتصل بك" : "and we will call you back"}
                </h3>

                <p className={styles.highlight}>{language === "ar" ? "قريبًا!" : "Soon!"}</p>
                <p className={styles.phone}>+9710506607159</p>
            </div>

            <div className={styles.container}>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        placeholder={language === "ar" ? "الاسم الأول" : "Enter Your First Name"}
                        {...register("FirstName")}
                    />
                    {errors.FirstName && <span className={styles.errorText}>{errors.FirstName.message}</span>}

                    <input
                        type="text"
                        placeholder={language === "ar" ? "الاسم الأخير" : "Enter Your Last Name"}
                        {...register("LastName")}
                    />
                    {errors.LastName && <span className={styles.errorText}>{errors.LastName.message}</span>}

                    <input
                        type="email"
                        placeholder={language === "ar" ? "البريد الإلكتروني" : "Enter Your Email"}
                        {...register("Email")}
                    />
                    {errors.Email && <span className={styles.errorText}>{errors.Email.message}</span>}

                    <input
                        type="text"
                        placeholder={language === "ar" ? "رقم الهاتف" : "Enter Your Phone Number"}
                        {...register("Phone")}
                    />
                    {errors.Phone && <span className={styles.errorText}>{errors.Phone.message}</span>}

                    <select {...register("Subject")}>
                        <option value="">{language === "ar" ? "اختر الخدمة" : "Select Service"}</option>
                        <option value="VillaConstruction">{language === "ar" ? "بناء الفلل" : "Villa Construction"}</option>
                        <option value="Structurerepair">{language === "ar" ? "إصلاح الهيكل" : "Structure Repair"}</option>
                        <option value="Cladding">{language === "ar" ? "التكسية" : "Cladding"}</option>
                    </select>
                    {errors.Subject && <span className={styles.errorText}>{errors.Subject.message}</span>}

                    <textarea
                        placeholder={language === "ar" ? "اكتب رسالتك" : "Enter Your Message"}
                        {...register("Message")}
                    />
                    {errors.Message && <span className={styles.errorText}>{errors.Message.message}</span>}

                    <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                        {isSubmitting
                            ? language === "ar"
                                ? "جارٍ الإرسال..."
                                : "Sending..."
                            : language === "ar"
                                ? "أرسل الآن"
                                : "Submit Now"}
                    </button>
                </form>
            </div>
        </div>
    );
}
