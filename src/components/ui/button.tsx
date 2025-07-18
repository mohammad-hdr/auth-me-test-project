import React from "react";
import styles from "./button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    children: React.ReactNode;
}

export default function Button({ loading = false, disabled, className = "", children, ...props }: ButtonProps) {
    return (
        <button className={`${styles.button} ${className}`} disabled={disabled || loading} {...props}>
            {loading ? <span>...</span> : children}
        </button>
    );
}
