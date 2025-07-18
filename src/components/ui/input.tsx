import React from "react";
import { FieldError } from "react-hook-form";
import styles from "./input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: FieldError;
}

export default function Input({ error, className = "", ...props }: InputProps) {
    return (
        <div className={styles.field}>
            <input className={`${styles.formInput} ${error ? styles.error : ""} ${className}`} {...props} />
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
}
