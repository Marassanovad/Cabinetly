import SignUpForm from "@/components/SignUpForm";

export default function registerPage () {
    return (
        <div className="flex flex-col items-center justify-center h-full gap-10">
            <h1 className="text-gray-800 font-semibold text-7xl">Register Page</h1>
            <SignUpForm />
        </div>
    )
}