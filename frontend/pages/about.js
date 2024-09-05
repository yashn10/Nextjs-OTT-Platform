import React from 'react'

const About = () => {

    return (

        <section className="text-gray-400 body-font bg-black">
            <div className="container mx-auto flex flex-wrap px-5 py-24 items-center">
                <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
                    <img
                        className="object-cover object-center rounded-lg w-full h-64 transition-transform duration-500 hover:scale-105"
                        alt="hero"
                        src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"
                    />
                </div>
                <div className="lg:w-1/2 w-full flex flex-col items-start text-left lg:pl-10">
                    <h1 className="title-font text-4xl font-bold text-white mb-4">
                        About Us
                    </h1>
                    <p className="mb-8 leading-relaxed text-lg">
                        We are a dedicated team of movie enthusiasts, bringing you the latest and greatest in the world of cinema. Our platform allows you to explore, watch, and enjoy a wide variety of films.
                    </p>
                </div>
            </div>
            <div className="container mx-auto flex flex-col items-center px-5 py-12">
                <div className="flex flex-col lg:flex-row lg:w-2/3 w-full justify-center items-center space-y-4 lg:space-y-0 lg:space-x-4">
                    <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105">
                        <h2 className="text-lg font-medium text-white hover:text-gray-200">
                            Our Mission
                        </h2>
                        <p className="text-base leading-relaxed mt-2">
                            To provide a seamless and enjoyable movie-watching experience, tailored to your tastes and preferences.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105">
                        <h2 className="text-lg font-medium text-white hover:text-gray-200">
                            Our Vision
                        </h2>
                        <p className="text-base leading-relaxed mt-2">
                            To be the ultimate destination for movie lovers, offering a vast collection of films from around the world.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105">
                        <h2 className="text-lg font-medium text-white hover:text-gray-200">
                            Our Values
                        </h2>
                        <p className="text-base leading-relaxed mt-2">
                            We believe in quality, diversity, and the power of storytelling to inspire and entertain.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )

}

export default About