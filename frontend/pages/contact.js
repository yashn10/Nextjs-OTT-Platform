import React, { useState } from 'react'


const Contact = () => {

    const [user, setuser] = useState({
        name: "", email: "", desc: ""
    })

    const handleInputs = (e) => {
        const name = e.target.name
        const value = e.target.value

        setuser({ ...user, [name]: value });
    }

    const contactdata = async (e) => {
        e.preventDefault();

        const { name, email, desc } = user;

        try {
            const response = await fetch('https://nextjs-ott-platform.onrender.com/contact', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, desc })
            })

            const res = await response.json();

            if (res) {
                window.alert("Message submitted successfully");
                console.log("Message submitted successfully");
                // navigate('/');
            } else {
                window.alert("error occurs");
                console.error("error occurs:", response.status);
            }
        } catch (error) {
            console.error('Error:', error);
            window.alert('An error occurred');
        }
    }


    return (

        <section className="text-gray-400 body-font relative bg-black">
            <div className="container mx-auto px-5 py-24">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">
                        We'd love to hear from you! Please reach out with any questions or feedback.
                    </p>
                </div>

                <div className="lg:w-1/2 md:w-2/3 mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
                    <form>
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-300">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={user.name}
                                        onChange={handleInputs}
                                        className="w-full bg-gray-700 rounded border border-gray-600 focus:border-gray-500 focus:bg-gray-800 focus:ring-2 focus:ring-gray-500 text-base outline-none text-gray-200 py-2 px-3 leading-8 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-300">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={user.email}
                                        onChange={handleInputs}
                                        className="w-full bg-gray-700 rounded border border-gray-600 focus:border-gray-500 focus:bg-gray-800 focus:ring-2 focus:ring-gray-500 text-base outline-none text-gray-200 py-2 px-3 leading-8 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-300">Message</label>
                                    <textarea
                                        id="desc"
                                        name="desc"
                                        value={user.desc}
                                        onChange={handleInputs}
                                        className="w-full bg-gray-700 rounded border border-gray-600 focus:border-gray-500 focus:bg-gray-800 focus:ring-2 focus:ring-gray-500 h-32 text-base outline-none text-gray-200 py-2 px-3 resize-none leading-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button
                                    type="button"
                                    className="flex mx-auto text-white bg-gray-600 border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 rounded text-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
                                    onClick={contactdata}
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className="pt-8 mt-8 border-t border-gray-700 text-center">
                        <a href="mailto:example@email.com" className="text-gray-300 hover:text-gray-200 transition-colors duration-300 text-lg font-medium">example@email.com</a>
                        <p className="leading-normal my-5 text-gray-400">
                            49 Smith St.<br />
                            Saint Cloud, MN 56301
                        </p>
                        <span className="inline-flex justify-center">
                            <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-300 mx-2">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 transition-transform duration-300 hover:scale-110" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-300 mx-2">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 transition-transform duration-300 hover:scale-110" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-300 mx-2">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 transition-transform duration-300 hover:scale-110" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-300 mx-2">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 transition-transform duration-300 hover:scale-110" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </section>

    )

}

export default Contact
