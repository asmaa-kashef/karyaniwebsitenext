"use client";
import { urlFor } from "../../src/lib/sanity.client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Blog.module.css";

interface BlogProps {
    posts: any[];
}

export default function FourDivs({ posts }: BlogProps) {
    return (
        <div className={styles.Fullcontainer}>
            <h2 className={styles.title}>News & Articles</h2>

            <div className={styles.container}>
                {/* 1. هذا الجزء سيقوم برسم المربعات بناءً على عدد المقالات (بحد أقصى 4) */}
                {posts?.slice(0, 4).map((post) => (
                    <div key={post._id} className={styles.box} style={{ position: 'relative' }}>
                        {post.mainImage && (
                            <Link href={`/${post.slug.current}`}>
                                <Image
                                    src={urlFor(post.mainImage).width(500).height(500).url()}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    style={{ padding: '10px' }}
                                />
                                {/* أضفت لكِ العنوان فوق الصورة بشكل اختياري */}
                                <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-2">
                                    <p className="text-white text-xs truncate">{post.title}</p>
                                </div>
                            </Link>
                        )}
                    </div>
                ))}

                {/* 2. حالة احتياطية: لو عندك أقل من 4 مقالات، المربعات الباقية تظهر فارغة بدلاً من أن ينهار التصميم */}
                {(!posts || posts.length < 4) &&
                    Array.from({ length: 4 - (posts?.length || 0) }).map((_, i) => (
                        <div key={`empty-${i}`} className={styles.box}>
                            Coming Soon
                        </div>
                    ))
                }
            </div>
        </div>
    );
}