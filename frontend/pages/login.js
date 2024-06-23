import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


const login = () => {

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
            const response = await fetch('https://nextjs-ott-platform.onrender.com/login', {
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

        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    <h1 className="title-font font-medium text-3xl text-gray-900">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
                    <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
                </div>
                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login Here</h2>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" onChange={change} value={user.email} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                        <input type="password" id="password" name="password" onChange={change} value={user.password} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={submit} disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
                    <Link href={'/signup'} className='mt-3'>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Signup
                        </button>
                    </Link>
                </div>
            </div>
        </section>

    )

}


export default login
