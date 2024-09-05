import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation'


const Movies = () => {

    const router = useRouter()
    const [maindata, setMainData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '64f91a2064msh4747489567f1dacp1680b2jsn11cb6487baaa',
                    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result);
                const titlesWithJawSummary = result.titles.map(title => title.jawSummary);
                const data = titlesWithJawSummary || [];
                setMainData(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    const checklogin = (id) => {
        const user = localStorage.getItem('user');

        if (user) {
            router.push(`movie/${id}`);
        } else {
            console.log("login required");
            window.alert("login required");
        }
    }


    return (

        <section className="text-gray-600 body-font bg-black">
            <div className="container px-5 py-12 mx-auto">
                <h1 className="text-center text-3xl font-semibold italic mb-6 text-white">Series & Movies</h1>
                <hr className="mb-6 border-gray-300" />

                {loading ? (
                    <div className="flex justify-center items-center min-h-screen">
                        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className="flex flex-wrap -m-4">
                        {maindata.length > 0 ? (
                            maindata.map((data) => (
                                <div key={data.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                    <div className="relative h-60 rounded-lg overflow-hidden bg-gray-200 hover:bg-gray-300 transition-colors duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-2xl">
                                        <a className="block relative w-full h-full">
                                            <img
                                                alt={data.title}
                                                className="object-cover object-center w-full h-full block transition-transform duration-500 ease-in-out"
                                                src={data.backgroundImage.url}
                                            />
                                        </a>
                                        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                            <h3 className="text-gray-300 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                            <h2 className="text-white title-font text-lg font-medium mb-2">{data.title}</h2>
                                            <p className="text-gray-300 mb-4">{data.synopsis.substring(0, 100)}...</p>
                                            <button
                                                onClick={() => checklogin(data.id)}
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
