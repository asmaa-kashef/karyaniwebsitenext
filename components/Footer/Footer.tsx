"use client"; // ضروري لو فيه أي تفاعلات مستقبلية

import styles from "./Footer.module.css";
import Image from "next/image";
export default function Footer() {
    return (
        <footer className={styles.Fullfooter}>
            <div className={styles.footer}>
            <div className={styles.column}>
                   
                        {/* اللوجو بدل العنوان */}
                        <Image
                            src="/images/logo.png" // حطي مسار اللوجو هنا
                            alt="Company Logo"
                            width={200} // حجم العرض
                            height={100} // حجم الارتفاع
                        />
                    <p>Karyani House and partners, in design and execution of modern spaces, bring clarity. Styles of modern design ensure uniqueness across every crafted project</p>
            </div>

            

            <div className={styles.column}>
                <h3>Projects</h3>
                <ul>
                    <li>Project 1</li>
                    <li>Project 2</li>
                    <li>Project 3</li>
                </ul>
            </div>

            <div className={styles.column}>
                <h3>Contact</h3>
                <p>Abu Dhabi, UAE</p>
                <p>+971 55 123 4567</p>
            </div>

            <div className={styles.column}>
                <h3>Social</h3>
                <ul>
                    <li>Facebook</li>
                    <li>LinkedIn</li>
                    <li>Instagram</li>
                </ul>
            </div>
            </div>
        </footer>
    );
}
