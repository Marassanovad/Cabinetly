'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInSchema } from "@/schemas/auth";

interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: string;
}

export default function SignInForm() {
    const [errors, setErrors] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors(null);
        setSuccessMessage(null);

        const formData = new FormData(e.currentTarget);

        const data = {
            email: formData.get("email") as string,
            password: formData.get("password") as string,
        };

        const result = signInSchema.safeParse(data);

        if (!result.success) {
            setErrors(result.error.errors[0]?.message || "Ошибка валидации");
            return;
        }

        const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find((u) => u.email === data.email);

        if (!user) {
            setErrors("Пользователь не найден");
            return;
        }

        if (user.password !== data.password) {
            setErrors("Неверный пароль");
            return;
        }

        setSuccessMessage(`Добро пожаловать, ${user.name || "пользователь"}!`);
    };

    return (
        <div className="flex justify-center items-center p-6">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-xl shadow-md p-8 w-full max-w-sm">
                <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Войти в кабинет</h1>

                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
                    required
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Пароль"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
                    required
                />

                {errors && <p className="text-sm text-red-500">{errors}</p>}
                {successMessage && <p className="text-sm text-green-500">{successMessage}</p>}

                <button
                    type="submit"
                    className="w-full py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors duration-200"
                >
                    Войти
                </button>

                <button
                    type="button"
                    onClick={() => router.push('/')}
                    className="w-full px-4 py-2 border border-teal-600 text-teal-600 rounded-md hover:bg-teal-50 transition-colors duration-200"
                >
                    На главный экран
                </button>
            </form>
        </div>
    );
}
