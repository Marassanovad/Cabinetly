import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="flex flex-col items-center gap-4 p-6 bg-neutral-900 text-gray-300">
            <div className="flex items-center gap-6">
                <a
                    href="https://www.linkedin.com/in/darya-marassanova-058a02331/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition"
                >
                    <FaLinkedin size={24} />
                </a>
                <a
                    href="https://github.com/Marassanovad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-100 transition"
                >
                    <FaGithub size={24} />
                </a>
                <a
                    href="mailto:marassanovad@gmail.com"
                    className="hover:text-red-400 transition"
                >
                    <FaEnvelope size={24} />
                </a>
            </div>
            <p className="text-sm text-gray-500">© 2025 Cabinetly. Все права защищены.</p>
        </footer>
    )
}
