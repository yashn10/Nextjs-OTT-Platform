import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


const login = ({ setloggedin }) => {

    const router = useRouter();

    const [user, setuser] = useState({
        email: "", password: ""
    })
    const [loading, setLoading] = useState(false);


    const change = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value });
    }

    const submit = async () => {
        setLoading(true);
        const { email, password } = user;

        try {
            const response = await fetch('http://localhost:7000/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            const res = await response.json();
            setLoading(false);

            if (res.success) {
                localStorage.setItem('user', JSON.stringify(res));
                setloggedin(true);
                window.alert('Login successful');
                router.push('/');
            } else {
                window.alert('Login failed: ' + res.error);
                console.log('Login failed due to invalid credentials');
            }
        } catch (error) {
            setLoading(false);
            console.error('Error during login:', error);
            window.alert('An error occurred during login. Please try again later.');
        }
    }

    return (

        <section className="text-gray-600 body-font bg-black">
            <div className="container mx-auto flex flex-wrap items-center justify-center py-24 px-5">
                <div className="lg:w-3/5 md:w-1/2 pr-0">
                    <h1 className="title-font font-bold text-5xl text-gray-100 leading-snug mb-6 hover:text-red-400 transition-colors duration-300">
                        Elevate Your Movie Experience
                    </h1>
                    <p className="leading-relaxed text-xl text-gray-300 hover:text-gray-100 transition-colors duration-300 mb-4">
                        Join MovieMosaic to explore, rate, and discuss your favorite movies. Discover the magic of cinema like never before.
                    </p>
                    <p className="text-lg text-gray-400 italic">
                        "Cinema is a matter of what's in the frame and what's out." – Martin Scorsese
                    </p>
                </div>
                <div className="lg:w-2/6 md:w-1/2 bg-gray-800 shadow-lg rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 hover:shadow-2xl transition-shadow duration-300">
                    <h2 className="text-gray-100 text-2xl font-semibold title-font mb-5">Login Here</h2>
                    <div className="relative mb-6">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400 hover:text-red-400 transition-colors duration-300">Email</label>
                        <input type="email" id="email" name="email" onChange={change} value={user.email}
                            className="w-full bg-gray-700 rounded border border-gray-600 focus:border-red-500 focus:ring-1 focus:ring-red-200 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-300 ease-in-out hover:bg-gray-600" />
                    </div>
                    <div className="relative mb-6">
                        <label htmlFor="password" className="leading-7 text-sm text-gray-400 hover:text-red-400 transition-colors duration-300">Password</label>
                        <input type="password" id="password" name="password" onChange={change} value={user.password}
                            className="w-full bg-gray-700 rounded border border-gray-600 focus:border-red-500 focus:ring-1 focus:ring-red-200 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-300 ease-in-out hover:bg-gray-600" />
                    </div>
                    <div className="flex justify-between">
                        <button className="text-white bg-red-600 border-0 py-2 px-8 focus:outline-none hover:bg-red-700 hover:scale-105 transform transition-all duration-300 rounded text-lg"
                            onClick={submit} disabled={loading}>
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                        <Link href={'/signup'}>
                            <button className="text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 hover:scale-105 transform transition-all duration-300 rounded text-lg">
                                Signup
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    )

}


export default login
