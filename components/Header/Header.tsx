"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import { useLanguage } from "../LanguageContext"; // استدعاء الـ Context

export default function Header() {
    const { language, setLanguage } = useLanguage(); // اللغة العالمية
    const [isOpen, setIsOpen] = useState(false);     // dropdown للغة
    const [navisOpen, navsetIsOpen] = useState(false); // mobile menu

    const toggleDropdown = () => setIsOpen(!isOpen);
    const toggleMenu = () => navsetIsOpen(!navisOpen);

    const changeLanguage = (lang: string) => {
        setLanguage(lang); // يغير اللغة عالميًا
        setIsOpen(false);  // يغلق dropdown
    };

    // قائمة القوائم مترجمة
    const menuItems = [
        { href: "/", en: "HOME", ar: "الرئيسية" },
        { href: "/about", en: "ABOUT", ar: "من نحن" },
        { href: "/services", en: "SERVICES", ar: "الخدمات" },
        { href: "/projects", en: "PROJECTS", ar: "المشاريع" },
        { href: "/blog", en: "BLOG", ar: "المدونة" },
        { href: "/contact", en: "CONTACT", ar: "اتصل بنا" },
    ];

    return (
        <header className={`${styles.header} ${language === "ar" ? styles.rtl : ""}`}>

            {/* ===== Top Bar ===== */}
            <div className={`${styles.topBar} ${language === "ar" ? styles.rtl : ""}`}>
                <div className={styles.left}>
                    <p className={styles.contactItem}>
                        <img src="/icons/mail.webp" alt={language === "ar" ? "البريد الإلكتروني" : "Email"} width={20} height={16} />
                        info@karyani-house.com
                    </p>
                    <p className={styles.contactItem}>
                        <img src="/icons/phone.webp" alt={language === "ar" ? "الهاتف" : "Phone"} width={20} height={16} />
                        +971-050-5597407
                    </p>
                </div>

                <div className={styles.middle}>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
                    </a>
                </div>

                <div className={styles.right}>
                    {/* Language Selector */}
                    <button onClick={toggleDropdown}>
                        {language === "ar" ? "عربي ▼" : "English ▼"}
                    </button>

                    {isOpen && (
                        <ul className={styles.dropdown}>
                            <li onClick={() => changeLanguage("en")}>English</li>
                            <li onClick={() => changeLanguage("ar")}>عربي</li>
                        </ul>
                    )}
                </div>
            </div>

            {/* ===== Main Header ===== */}
            <div className={`${styles.container} ${language === "ar" ? styles.rtl : ""}`}>
                <div className={styles.logonav}>
                    {/* Logo */}
                    <Link href="/" className={styles.logo}>
                        <Image
                            src="/images/logo.png"
                            alt="Karyani House"
                            width={160}
                            height={50}
                            priority
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <nav className={styles.navDesktop}>
                        {menuItems.map((item, idx) => (
                            <Link key={idx} href={item.href}>
                                {language === "ar" ? item.ar : item.en}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button className={styles.menuButton} onClick={toggleMenu}>
                        {navisOpen ? "✖" : "☰"}
                    </button>
                </div>

                {/* Mobile Menu */}
                {navisOpen && (
                    <nav className={styles.navMobile}>
                        {menuItems.map((item, idx) => (
                            <Link key={idx} href={item.href} onClick={() => navsetIsOpen(false)}>
                                {language === "ar" ? item.ar : item.en}
                            </Link>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
}
