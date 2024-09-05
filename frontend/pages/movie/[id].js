import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';


const id = () => {

    const [maindata, setMainData] = useState([]);
    const [loading, setLoading] = useState(true);

    const router = useRouter();
    const { id } = router.query;

    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

    const fetchData = async () => {
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
            setMainData(result[0]?.details || {});
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const watchlist = async () => {
        // Retrieve the existing watchlist from localStorage
        let currentWatchlist = JSON.parse(localStorage.getItem("Watchlist")) || [];

        // Check if the id is already in the watchlist
        if (!currentWatchlist.includes(id)) {
            // Add the new movie id to the watchlist
            currentWatchlist.push(id);

            // Store the updated watchlist back in localStorage
            localStorage.setItem("Watchlist", JSON.stringify(currentWatchlist));

            alert("Item added to watchlist");
        } else {
            alert("Item is already in the watchlist");
        }
    };


    useEffect(() => {
        fetchData()
    }, [id])


    return (

        <section className="text-gray-400 body-font bg-black">
            <div className="container mx-auto px-5 py-24 flex flex-col md:flex-row items-center">
                {loading ? (
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="loader"></div>
                    </div>
                ) : (
                    <>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <img
                                className="object-cover object-center rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
                                alt={maindata.title}
                                src={maindata.backgroundImage?.url || ''}
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font text-3xl md:text-4xl mb-4 font-semibold text-gray-100">
                                {maindata.title}
                            </h1>
                            <p className="mb-6 leading-relaxed text-lg text-gray-300">
                                {maindata.synopsis}
                            </p>
                            <div className="flex justify-center gap-4">
                                <button className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded-lg text-lg transform transition-transform duration-300 hover:scale-105">
                                    Watch Now
                                </button>
                                <button className="inline-flex text-gray-200 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded-lg text-lg transform transition-transform duration-300 hover:scale-105" onClick={watchlist}>
                                    Add to Watchlist
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>

    )

}


export default id