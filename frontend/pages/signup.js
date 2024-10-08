import { useRouter } from 'next/router';
import React, { useState } from 'react'


const signup = () => {

    const Router = useRouter();

    const [user, setuser] = useState({
        name: "", email: "", phone: "", password: ""
    });

    const change = (e) => {
        const name = e.target.name
        const value = e.target.value

        setuser({ ...user, [name]: value });
    }

    const submit = async () => {
        const { name, email, phone, password } = user;

        const response = await fetch('https://nextjs-ott-platform.onrender.com/user', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, password
            })
        })

        const res = await response.json();

        if (res.success) {
            Router.push('/login');
            console.log('User registered successfully');
            window.alert('Registration successfull');
        } else {
            console.log('User already registered with same email');
            window.alert('User already registered with same email');
        }
    }


    return (

        <section className="text-gray-600 body-font relative bg-black">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-100">Signup Here</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
                </div>

                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    onChange={change}
                                    className="w-full bg-gray-800 text-gray-200 rounded border border-gray-600 focus:border-red-500 focus:bg-gray-900 focus:ring-2 focus:ring-red-500 py-2 px-3 leading-8 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    onChange={change}
                                    className="w-full bg-gray-800 text-gray-200 rounded border border-gray-600 focus:border-red-500 focus:bg-gray-900 focus:ring-2 focus:ring-red-500 py-2 px-3 leading-8 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="phone" className="leading-7 text-sm text-gray-400">Phone</label>
                                <input
                                    type="number"
                                    id="phone"
                                    name="phone"
                                    onChange={change}
                                    className="w-full bg-gray-800 text-gray-200 rounded border border-gray-600 focus:border-red-500 focus:bg-gray-900 focus:ring-2 focus:ring-red-500 py-2 px-3 leading-8 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="password" className="leading-7 text-sm text-gray-400">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    onChange={change}
                                    className="w-full bg-gray-800 text-gray-200 rounded border border-gray-600 focus:border-red-500 focus:bg-gray-900 focus:ring-2 focus:ring-red-500 py-2 px-3 leading-8 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button
                                className="flex mx-auto text-white bg-red-600 border-0 py-2 px-8 focus:outline-none hover:bg-red-700 rounded text-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                                onClick={submit}
                            >
                                Signup
                            </button>
                        </div>
                        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-700 text-center">
                            <a className="text-red-500">example@email.com</a>
                            <p className="leading-normal my-5 text-gray-400">
                                49 Smith St.
                                <br />Saint Cloud, MN 56301
                            </p>
                            <span className="inline-flex">
                                <a className="text-gray-500 hover:text-red-500 transition-colors duration-300 mx-2">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-500 hover:text-red-500 transition-colors duration-300 mx-2">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-500 hover:text-red-500 transition-colors duration-300 mx-2">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-500 hover:text-red-500 transition-colors duration-300 mx-2">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )

}


export default signup
