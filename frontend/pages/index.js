import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  return (

    <div>

      <section className="relative bg-black">
        <div className="relative h-96 w-full">
          <img
            src="https://images.pexels.com/photos/5824237/pexels-photo-5824237.jpeg"
            alt="Movies"
            className="object-cover w-full h-full opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-8">
            <h1 className="text-2xl md:text-5xl font-extrabold mb-4 leading-tight tracking-wide">
              Unlimited Movies, TV Shows, and More.
            </h1>
            <p className="text-lg md:text-2xl font-light mb-8">
              Watch anywhere. Cancel anytime.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              <Link href={'/movies'}>Get Started</Link>
            </button>
          </div>
        </div>
      </section>


      <section className="bg-black text-white py-24">
        <div className="container mx-auto px-5">
          <div className="flex flex-wrap w-full mb-16 flex-col items-center text-center">
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-white">
              Access the Latest Movies & Series
            </h1>
            <p className="lg:w-2/3 w-full leading-relaxed text-lg text-gray-300">
              Explore a world of entertainment with early access to new releases, popular titles, and exclusive content—all in high quality.
            </p>
          </div>

          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="inline-flex items-center justify-center rounded-full bg-red-600 text-white mb-6 p-3">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  Early Access to New Movies
                </h2>
                <p className="leading-relaxed text-base text-gray-300">
                  Watch new Hollywood and Bollywood movies as soon as they launch, free of charge.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="inline-flex items-center justify-center rounded-full bg-red-600 text-white mb-6 p-3">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  Anytime Access to Popular Movies
                </h2>
                <p className="leading-relaxed text-base text-gray-300">
                  Enjoy unlimited access to top movies anytime, anywhere, after you sign up and log in.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="inline-flex items-center justify-center rounded-full bg-red-600 text-white mb-6 p-3">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  Watch All Movies Free of Cost
                </h2>
                <p className="leading-relaxed text-base text-gray-300">
                  Access new and popular Hollywood and Bollywood movies for free.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <button className="text-white bg-red-600 border-0 py-3 px-10 focus:outline-none hover:bg-red-700 rounded-full text-lg transition-transform duration-300 hover:scale-105 shadow-lg">
              <Link href={'/movies'}>Watch Now</Link>
            </button>
          </div>
        </div>
      </section>

    </div>

  )

}
