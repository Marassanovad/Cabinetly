import Link from 'next/link'

export default function HomePage() {
    return (
        <div className="flex flex-col justify-center items-center px-4 py-16 ">
            <div className="space-y-6 text-center max-w-md w-full px-6 py-8 bg-white rounded-xl shadow-md">
                <h1 className="text-3xl font-bold text-gray-800">Добро пожаловать в Cabinetly</h1>
                <p className="text-gray-600">
                    Этот сайт создан как пет-проект для демонстрации личного кабинета с авторизацией.
                    Здесь вы можете войти или зарегистрироваться для доступа к своим данным.
                </p>
                <p className="text-gray-500 text-sm">
                    Хочешь узнать, кто стоит за этим проектом? Загляни на{' '}
                    <Link
                        href="/about"
                        className="text-teal-600 hover:underline hover:text-teal-700 transition-colors duration-200"
                    >
                        страницу обо мне
                    </Link>
                    .
                </p>

                <div className="flex justify-center gap-4 mt-6">
                    <Link href="/login"
                          className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors duration-200">
                        Войти
                    </Link>
                    <Link href="/register"
                          className="px-4 py-2 border border-teal-600 text-teal-600 rounded-md hover:bg-teal-50 transition-colors duration-200">
                        Зарегистрироваться
                    </Link>
                </div>
            </div>
        </div>
    )
}
