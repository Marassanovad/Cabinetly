import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center mt-20 px-4">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">404 — Страница не найдена</h1>
            <p className="text-gray-600 mb-6 max-w-md">
                Извините, мы не смогли найти страницу, которую вы ищете. Возможно, она была удалена или вы неправильно ввели адрес.
            </p>
            <Link
                href="/"
                className="inline-block px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors duration-200"
            >
                Вернуться на главную
            </Link>
        </div>
    )
}