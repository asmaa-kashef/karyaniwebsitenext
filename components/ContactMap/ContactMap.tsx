"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLanguage } from "../../components/LanguageContext";
import { useRouter } from "next/navigation";
import styles from "./ContactMap.module.css";

// تعريف السكيما
const contactSchema = z.object({
    name: z.string().min(3, "Required"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(8, "Required"),
    address: z.string().min(1, "Required"),
    service: z.string().min(1, "Required"),
    message: z.string().min(1, "Required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const translations = {
    en: {
        heading: "Book your free consultation now",
        heading2: "Want to get in touch?",
        heading3: "Fill out the form",
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        address: "Address",
        servicePlaceholder: "Select Service",
        services: {
            villa: "Villa Construction",
            structure: "Structure Repair",
            maintenance: "General Maintenance",
            cladding: "Cladding",
        },
        message: "Write your message here...",
        submit: "Send Message",
        sending: "Sending...",
    },
    ar: {
        heading: "احجز استشارتك المجانية الآن",
        heading2: "هل ترغب في التواصل؟",
        heading3: "املأ النموذج",
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        address: "العنوان",
        servicePlaceholder: "اختر الخدمة",
        services: {
            villa: "بناء الفلل",
            structure: "اصلاح الهياكل",
            maintenance: "الصيانة العامة",
            cladding: "واجهة التكسيه",
        },
        message: "اكتب رسالتك هنا...",
        submit: "إرسال الرسالة",
        sending: "جارٍ الإرسال...",
    },
};

export default function ContactLocation() {
    const { language } = useLanguage();
    const t = translations[language];
    const router = useRouter();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        try {
            const sheetURL =
                "https://script.google.com/macros/s/AKfycbxrUcITfQZSkhsobRC6eoVgHaGaozHJPqDsOljwYvZeUC_6gN4UkoNvwCJ137uGqp3lXA/exec";

            const formData = new URLSearchParams();
            formData.append("firstname", data.name);
            formData.append("lastname", ""); // إذا ما عندك Last Name استخدم فارغ
            formData.append("Email", data.email);
            formData.append("PhoneNumber", data.phone || "");
            formData.append("Subject", data.service);
            formData.append("Message", data.message);

            await fetch(sheetURL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formData.toString(),
            });

            reset();
            router.push("/thank-you"); // تحويل للصفحة
        } catch (err) {
            alert(language === "ar" ? "حدث خطأ، حاول مرة أخرى." : "Error, please try again.");
        }
    };

    return (
        <div className={styles.FullContactLocation} dir={language === "ar" ? "rtl" : "ltr"}>
            <div className={styles.Contactform}>
                <p>{t.heading}</p>
                <p>{t.heading2}</p>
                <p>{t.heading3}</p>

                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder={t.name} {...register("name")} />
                    {errors.name && <span className={styles.errorText}>{errors.name.message}</span>}

                    <input type="email" placeholder={t.email} {...register("email")} />
                    {errors.email && <span className={styles.errorText}>{errors.email.message}</span>}

                    <input type="text" placeholder={t.phone} {...register("phone")} />
                    {errors.phone && <span className={styles.errorText}>{errors.phone.message}</span>}

                    <input type="text" placeholder={t.address} {...register("address")} />
                    {errors.address && <span className={styles.errorText}>{errors.address.message}</span>}

                    <select {...register("service")}>
                        <option value="">{t.servicePlaceholder}</option>
                        <option value="villa">{t.services.villa}</option>
                        <option value="structure">{t.services.structure}</option>
                        <option value="maintenance">{t.services.maintenance}</option>
                        <option value="cladding">{t.services.cladding}</option>
                    </select>
                    {errors.service && <span className={styles.errorText}>{errors.service.message}</span>}

                    <textarea placeholder={t.message} {...register("message")} />
                    {errors.message && <span className={styles.errorText}>{errors.message.message}</span>}

                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? t.sending : t.submit}
                    </button>
                </form>
            </div>

            <div className={styles.ContactLocation}>
                <iframe
                    src="https://www.google.com/maps?q=Alniyadi%20Building%2C%206th%20Floor%2C%20Office%20602%2C%20Airport%20Road%2C%20Abu%20Dhabi%2C%20UAE&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: "12px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    );
}
