import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'


const header = ({ loggedin, setloggedin }) => {

    const router = useRouter();

    const logout = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('user');
            setloggedin(false);
            console.log("User logout successfully");
            window.alert("User logout successfully");
            router.push("/login");
        }
    };


    const Navbarmenu = () => {
        return (
            <>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base font-medium justify-center space-x-6">
                    <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</Link>
                    <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About</Link>
                    <Link href="/movies" className="text-gray-400 hover:text-white transition-colors duration-300">Movies</Link>
                    {loggedin && <Link href="/watchlist" className="text-gray-400 hover:text-white transition-colors duration-300">Watch List</Link>}
                    <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</Link>
                </nav>

                <div className="mt-4 md:mt-0">
                    {loggedin ? (
                        <Link href={''} onClick={logout}>
                            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 flex items-center rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                                Logout
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </Link>
                    ) : (
                        <Link href="/login">
                            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 flex items-center rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                                Login
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </Link>
                    )}
                </div>
            </>
        )
    }


    return (

        <header className="body-font sticky top-0 bg-black z-10 shadow-md">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-red-600 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-2xl font-semibold">MovieMosaic</span>
                </Link>
                <Navbarmenu />
            </div>
        </header>

    )
}

export default header
