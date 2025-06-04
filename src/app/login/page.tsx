import SignInForm from "@/components/SignInForm";

export default function loginPage () {
    return (
        <div className="flex flex-col items-center justify-center h-full gap-10">
            <h1 className="text-gray-800 font-semibold text-7xl">Login Page</h1>
            <SignInForm />
        </div>
    )
}