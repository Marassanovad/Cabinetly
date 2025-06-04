'use client'

import { useState } from "react"
import { signUpSchema } from "@/schemas/auth"
import { useRouter } from "next/navigation"

interface User {
    id: string
    name: string
    email: string
    password: string
    createdAt: string
}

export default function SignUpForm() {
    const [form, setForm] = useState({ email: '', password: '', name: '' })
    const [errors, setErrors] = useState<string | null>(null)
    const [successMessage, setSuccessMessage] = useState<string | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const router = useRouter()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setErrors(null)
        setSuccessMessage(null)
        setIsSubmitting(true)

        const result = signUpSchema.safeParse(form)

        if (!result.success) {
            setErrors(result.error.errors[0]?.message || "Ошибка валидации")
            setIsSubmitting(false)
            return
        }

        const users: User[] = JSON.parse(localStorage.getItem('users') || '[]')
        const userExists = users.find((u) => u.email === form.email)

        if (userExists) {
            setErrors('Пользователь с таким email уже существует.')
            setIsSubmitting(false)
            return
        }

        const newUser: User = {
            ...form,
            id: crypto.randomUUID(),
            createdAt: new Date().toISOString(),
        }

        localStorage.setItem('users', JSON.stringify([...users, newUser]))
        setSuccessMessage('Регистрация прошла успешно!')
        setForm({ email: '', password: '', name: '' })
        setIsSubmitting(false)
    }

    return (
        <div className="flex justify-center items-center p-6">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-xl shadow-md p-8 w-full max-w-sm">
                <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Регистрация в кабинет</h1>

                <input
                    name="email"
                    type="email"
                    placeholder="Введите Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
                    required
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Введите пароль"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
                    required
                />

                <input
                    name="name"
                    type="text"
                    placeholder="Введите имя"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
                    required
                />

                {errors && <p className="text-sm text-red-500">{errors}</p>}
                {successMessage && <p className="text-sm text-green-500">{successMessage}</p>}

                <button
                    type="submit"
                    className="w-full py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors duration-200"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Регистрация...' : 'Регистрация'}
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
    )
}
