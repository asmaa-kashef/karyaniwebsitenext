// FourDivs.tsx
"use client";

import React from "react";
import styles from "./Blog.module.css"; // استدعاء الموديول

export default function FourDivs() {
    return (
        <div className={styles.Fullcontainer}>
            <h2 className={styles.title}>News & Articles</h2>
        
        <div className={styles.container}>
            <div className={styles.box}>Div 1</div>
            <div className={styles.box}>Div 2</div>
            <div className={styles.box}>Div 3</div>
            <div className={styles.box}>Div 4</div>
        </div>
            </div>
     
    );
}
