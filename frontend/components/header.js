import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const header = () => {

    const [user, setUser] = useState(null);

    const logout = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('user');
            setUser(null);
            console.log("User logout successfully");
            window.alert("User logout successfully");
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedUser = localStorage.getItem('user');
            setUser(storedUser);
        }
    }, []);


    const Navbarmenu = () => {
        if (user) {
            return (
                <>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base font-medium justify-center">
                        <Link href={"/"} className="mr-5 hover:text-gray-900">Home</Link>
                        <Link href={"/about"} className="mr-5 hover:text-gray-900">About</Link>
                        <Link href={"/movies"} className="mr-5 hover:text-gray-900">Movies</Link>
                        <Link href={"/list"} className="mr-5 hover:text-gray-900">Watch list</Link>
                        <Link href={"/contact"} className="mr-5 hover:text-gray-900">Contact</Link>
                    </nav>

                    <Link href={''} onClick={logout}>
                        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                            Logout
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </Link>
                </>
            )
        } else {
            return (
                <>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base font-medium justify-center">
                        <Link href={"/"} className="mr-5 hover:text-gray-900">Home</Link>
                        <Link href={"/about"} className="mr-5 hover:text-gray-900">About</Link>
                        <Link href={"/movies"} className="mr-5 hover:text-gray-900">Movies</Link>
                        <Link href={"/contact"} className="mr-5 hover:text-gray-900">Contact</Link>
                    </nav>

                    <Link href={'/login'}>
                        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                            Login
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </Link>
                </>
            )
        }
    }


    return (

        <header className="body-font sticky top-0 bg-white z-10">
            <div className="row mx-auto flex flex-wrap my-1 p-3 flex-col md:flex-row items-center shadow-md">

                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">MovieMosaic</span>
                </a>

                <Navbarmenu />

            </div>
        </header >

    )
}

export default header
