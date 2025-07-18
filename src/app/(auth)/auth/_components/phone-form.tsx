"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Phone number validation schema
const phoneSchema = z.object({
    phoneNumber: z
        .string()
        .min(1, "لطفا شماره تلفن خود را وارد کنید")
        .regex(/^(\+98|0)?9\d{9}$/, "لطفا شماره تلفن خود را به درستی وارد کنید")
        .transform((val) => {
            const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
            const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
            for (let i = 0; i < persianNumbers.length; i++) val = val.replace(persianNumbers[i], arabicNumbers[i]);
            if (val.startsWith("0")) return "+98" + val.slice(1);
            if (!val.startsWith("+98")) return "+98" + val;
            return val;
        }),
});

type PhoneFormData = z.infer<typeof phoneSchema>;

const formatPhoneNumber = (value: string): string => {
    // Remove all non-digit characters
    const cleaned = value.replace(/\D/g, "");

    // Must start with 0 or 9
    if (cleaned.startsWith("0")) {
        if (cleaned.length > 1 && cleaned[1] !== "9") return cleaned[0]; // Only keep the 0
    } else {
        if (cleaned.length > 0 && cleaned[0] !== "9") return ""; // Don't allow any input
    }

    // Format as 0912 345 6789
    if (cleaned.length <= 4) return cleaned;
    else if (cleaned.length <= 7) return `${cleaned.slice(0, 4)} ${cleaned.slice(4)}`;
    else return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7, 11)}`;
};

export default function PhoneForm() {
    const {
        setValue,
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<PhoneFormData>({
        resolver: zodResolver(phoneSchema),
        defaultValues: { phoneNumber: "" },
    });

    const onSubmit = async (data: PhoneFormData) => {
        try {
            console.log("Form submitted with:", data);
            alert(`Phone number submitted: ${data.phoneNumber}`);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    // Handle input change with formatting
    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatPhoneNumber(e.target.value);
        setValue("phoneNumber", formatted);
    };

    return (
        <div className="auth-container">
            <h1>شماره موبایل خود را وارد کنید.</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
                <div className="field">
                    <input
                        id="phoneNumber"
                        dir="ltr"
                        type="tel"
                        placeholder="0912 345 6789"
                        {...register("phoneNumber")}
                        onChange={handlePhoneNumberChange}
                        maxLength={13} // Include spaces
                        className={`form-input ${errors.phoneNumber ? "error" : ""}`}
                    />
                    {errors.phoneNumber && <span className="error-message">{errors.phoneNumber.message}</span>}
                </div>
                <button type="submit" disabled={isSubmitting} className="submit-button">
                    ورود
                </button>
            </form>
        </div>
    );
}
