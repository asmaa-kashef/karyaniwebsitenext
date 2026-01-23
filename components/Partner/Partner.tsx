"use client";
import Image from "next/image";
import styles from "./Partner.module.css";

export default function Partner() {
    return (
                <>

        <h2 className={styles.title}>Our Strategic Partners</h2>

        <div className={styles.Partner}>
         
            <div className={styles.client}>

                <div className={styles.image}>
                    <Image
                        src="/images/clients/1.webp"
                        alt="Partner Logo 1"
                        width={150}
                        height={100}
                        className={styles.img}
                    />
                </div>

                <div className={styles.image}>
                    <Image
                        src="/images/clients/2.webp"
                        alt="Partner Logo 2"
                        width={150}
                        height={100}
                        className={styles.img}
                    />
                </div>

                <div className={styles.image}>
                    <Image
                        src="/images/clients/3.webp"
                        alt="Partner Logo 3"
                        width={150}
                        height={100}
                        className={styles.img}
                    />
                </div>

                <div className={styles.image}>
                    <Image
                        src="/images/clients/4.webp"
                        alt="Partner Logo 4"
                        width={150}
                        height={100}
                        className={styles.img}
                    />
                </div>

                <div className={styles.image}>
                    <Image
                        src="/images/clients/5.webp"
                        alt="Partner Logo 5"
                        width={150}
                        height={100}
                        className={styles.img}
                    />
                </div>

            </div>
            </div>
                </>

    );
}
