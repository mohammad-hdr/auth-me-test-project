"use client";
import React from "react";
import { motion } from "motion/react";
import styles from "./button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    children: React.ReactNode;
}

export default function Button({ loading = false, disabled, className = "", children, ...props }: ButtonProps) {
    return (
        <button className={`${styles.button} ${loading ? styles.loading : ""} ${className}`} disabled={disabled} {...props}>
            {loading ? (
                <motion.span
                    className={styles.loadingText}
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                >
                    در حال ورود...
                </motion.span>
            ) : (
                children
            )}
        </button>
    );
}
