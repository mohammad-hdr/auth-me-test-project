"use client";
//! Required
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import useUser from "@/hooks/use-user";
import { login } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Input, Button } from "@/components/ui";

const phoneSchema = z.object({
    phoneNumber: z
        .string()
        .min(1, "لطفا شماره تلفن خود را وارد کنید")
        .transform((val: string) => val.replace(/\s/g, ""))
        .pipe(
            z
                .string()
                .regex(
                    /^(?:\+98|0|98)?(?:9(?:0[1-5]|[13]\d|2[0-2]|98)\d{7}|9(?:0[6-9]|[1-5]\d|6[0-6]|7[0-9]|8[0-8])\d{7})$/,
                    "لطفا شماره تلفن خود را به درستی وارد کنید"
                )
        )
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
    const { fetchUser } = useUser();
    const { push } = useRouter();
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
            const user = await fetchUser();
            login({
                token: user.results[0].login.uuid,
                firstName: user.results[0].name.first,
                lastName: user.results[0].name.last,
                picture: user.results[0].picture.thumbnail,
                phoneNumber: data.phoneNumber,
            });
            toast("ورود با موفقیت انجام شد", {
                icon: "👏",
                style: { borderRadius: "1rem", background: "#1E1E1E", color: "#CED4DA" },
            });
            push("/dashboard");
        } catch (error: any) {
            console.log(error);
            toast(error?.response?.data?.message || "خطایی رخ داد، دوباره تلاش کنید", {
                icon: "🚫",
                style: { borderRadius: "1rem", background: "#4E1C23", color: "#B92134" },
            });
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
                <Input
                    id="phoneNumber"
                    dir="ltr"
                    type="tel"
                    placeholder="0912 345 6789"
                    {...register("phoneNumber")}
                    onChange={handlePhoneNumberChange}
                    maxLength={13} // Include spaces
                    error={errors.phoneNumber}
                />
                <Button type="submit" disabled={isSubmitting} loading={isSubmitting}>
                    ورود
                </Button>
            </form>
        </div>
    );
}
