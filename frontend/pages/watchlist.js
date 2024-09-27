import React, { useState, useEffect } from 'react';

const Watchlist = () => {

    const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);


    const getwatchlist = () => {
        const list = JSON.parse(localStorage.getItem("Watchlist")) || [];
        setData(list);
    }


    const removemovie = (removeid) => {
        let ids = JSON.parse(localStorage.getItem("Watchlist"));

        const movie = ids.some(id => id.id === removeid);

        if (!movie) {
            alert("Item not found in the watchlist");
        } else {
            ids = ids.filter(id => id.id !== removeid);
            localStorage.setItem("Watchlist", JSON.stringify(ids));
            alert("Item removed from watchlist");
            getwatchlist();
        }
    }


    useEffect(() => {
        getwatchlist();
    }, []);


    return (

        <section className="text-gray-200 body-font bg-black">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-12">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white transition-transform duration-500 ease-in-out transform hover:scale-105 hover:text-indigo-400">
                        My Watchlist
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:text-gray-300">
                        Here are the movies you’ve added to your watchlist. Click on a movie to view more details or remove it from your list.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {(
                        data.map((movie, index) => (
                            <div key={index} className="p-4 lg:w-1/4 md:w-1/2 w-full">
                                <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
                                    <img
                                        className="object-cover object-center rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
                                        alt={movie?.title || 'Movie Title'}
                                        src={movie?.image || ''}
                                    />
                                    <div className="p-6">
                                        <h1 className="title-font text-3xl md:text-4xl mb-4 font-semibold text-gray-100">
                                            {movie?.title || 'Movie Title'}
                                        </h1>
                                        <p className="mb-6 leading-relaxed text-lg text-gray-300">
                                            {movie?.desc || 'No description available.'}
                                        </p>
                                        <div className="flex items-center mt-4">
                                            <button className="text-white bg-red-600 border-0 py-2 px-4 focus:outline-none hover:bg-red-700 rounded text-lg transform transition-transform duration-300 hover:scale-105" onClick={() => removemovie(movie.id)}>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>

    );
};

export default Watchlist;
