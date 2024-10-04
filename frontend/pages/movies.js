import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
const apikey = process.env.NEXT_PUBLIC_API_KEY
const apihost = process.env.NEXT_PUBLIC_API_HOST


const Movies = () => {

    const router = useRouter()
    const [maindata, setMainData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState(''); // State for the search query
    const [filteredMovies, setfilteredmovies] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://movies-api14.p.rapidapi.com/shows';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': apikey,
                    'x-rapidapi-host': apihost
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result);
                setMainData(result.movies);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    const checklogin = (data) => {
        const user = localStorage.getItem('user');

        if (user) {
            router.push({
                pathname: `movie/${data._id}`,
                query: {
                    id: data._id,
                    title: data.title,
                    image: data.poster_path,
                    desc: data.overview
                }
            });
        } else {
            console.log("login required");
            window.alert("login required");
        }
    }


    useEffect(() => {
        const filteredMovies = searchQuery ?
            maindata.filter((movie) => movie.title.toLowerCase().includes(searchQuery.toLowerCase())) : maindata;

        setfilteredmovies(filteredMovies);
    }, [searchQuery, maindata])



    return (

        <section className="text-gray-600 body-font bg-black">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex" style={{ "justify-content": "space-between" }}>
                    <h1 className="text-3xl font-semibold italic mb-6 text-white">Series & Movies</h1>
                    {/* Updated Search Bar */}
                    <div className="relative w-1/4">
                        <input
                            type="text"
                            placeholder="Search for a movie..."
                            className="w-full py-2 pl-10 pr-4 bg-gray-800 text-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-900 transition-all duration-300 ease-in-out"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {/* Search Icon */}
                        <div className="absolute left-3 top-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 11a4 4 0 108 0 4 4 0 00-8 0zm13 11l-4.35-4.35" />
                            </svg>
                        </div>
                    </div>
                </div>
                <hr className="mb-6 border-gray-300" />

                {loading ? (
                    <div className="flex justify-center items-center min-h-screen">
                        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className="flex flex-wrap -m-4">
                        {filteredMovies.length > 0 ? (
                            filteredMovies.map((data) => (
                                <div key={data._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                    <div className="relative h-60 rounded-lg overflow-hidden bg-gray-200 hover:bg-gray-300 transition-colors duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-2xl">
                                        <a className="block relative w-full h-full">
                                            <img
                                                alt={data.title}
                                                className="object-cover object-center w-full h-full block transition-transform duration-500 ease-in-out"
                                                src={data.poster_path}
                                            />
                                        </a>
                                        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                            <h3 className="text-gray-300 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                            <h2 className="text-white title-font text-lg font-medium mb-2">{data.title}</h2>
                                            <p className="text-gray-300 mb-4">{data.overview.substring(0, 100)}...</p>
                                            <button
                                                onClick={() => checklogin(data)}
                                                className="py-2 px-4 w-full bg-white text-gray-800 font-semibold rounded shadow-md hover:bg-gray-100 transition-colors duration-300 ease-in-out"
                                            >
                                                Visit Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center w-full">No movies found</p>
                        )}
                    </div>
                )}
            </div>
        </section>

    )
};


export default Movies;
