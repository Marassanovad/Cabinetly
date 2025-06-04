import {z} from "zod";

export const signInSchema = z.object({
    email: z.string().email('Неверный email'),
    password: z.string().min(6, 'Минимум 6 символов')
})

export const signUpSchema = z.object({
    email: z.string().email('Неверный email'),
    password: z.string()
        .min(6, 'Минимум 6 символов')
        .refine((val) => /[a-zA-Z]/.test(val), {
            message: 'Пароль должен содержать хотя бы одну букву',
        })
        .refine((val) => /\d/.test(val), {
            message: 'Пароль должен содержать хотя бы одну цифру',
        }),
    name: z.string()
        .min(2, 'Имя должно содержать минимум 2 буквы')
        .regex(/^[a-zA-Zа-яА-ЯёЁ]+$/, 'Имя должно содержать только буквы'),
})

export type SignInSchema = z.infer<typeof signInSchema>
export type SignUpSchema = z.infer<typeof signUpSchema>