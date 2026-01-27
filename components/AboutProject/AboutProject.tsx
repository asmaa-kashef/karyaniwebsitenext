import Image from "next/image";
import styles from "./AboutProject.module.css";

import Link from "next/link";
export default function AboutProject() {
    return (
        <div className={styles.AboutProject}>
        <div className={styles.AboutProjectimage}>
            <Image
                src="/images/main-slider/alphabet-image.png"
                alt="Banner"
                width={600}
                height={700}
                className={styles.ProjectImage}
               
            />
            <div className={styles.textProject}>
                    <h2>  Any Project For Any Scale</h2>
                    <p>Karyani House, one of the leading contracting companies in Abu Dhabi, specializes in villa construction, interior design, renovation, and maintenance services across the UAE. We provide expert services in structural repair, cladding, aluminum and glass works, interior finishing, and custom construction solutions.</p>
                    <ul className={styles.textProjectul}>
                       <li>Looking for trusted contracting companies in Abu Dhabi? Start your project with us today.</li>
                        <li>Want to renovate or build your villa? Talk to our experts now.</li>
                        <li>Need tailored construction solutions? Request a free consultation.</li>
                    </ul>
                    <Link href="/project" className={styles.btn}>
                        Explore about project
                    </Link>

        </div>
        </div>
        </div>
    );
}
