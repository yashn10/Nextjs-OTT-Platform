import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { data } from 'autoprefixer';


const id = () => {

    const router = useRouter();
    const { id, title, image, desc } = router.query;


    const watchlist = async () => {
        // Retrieve the existing watchlist from localStorage or create a new array
        let currentWatchlist = JSON.parse(localStorage.getItem("Watchlist")) || [];

        // Check if the movie is already in the watchlist based on its title
        const isMovieInWatchlist = currentWatchlist.some((data) => data.title === title);

        if (!isMovieInWatchlist) {
            // Add the new movie data to the watchlist
            const data = { id, title, image, desc };
            currentWatchlist.push(data);

            // Store the updated watchlist back in localStorage
            localStorage.setItem("Watchlist", JSON.stringify(currentWatchlist));

            alert("Item added to watchlist");
        } else {
            alert("Item is already in the watchlist");
        }
    };



    return (

        <section className="text-gray-400 body-font bg-black">
            <div className="container mx-auto px-5 py-24 flex flex-col md:flex-row items-center">


                <div className="lg:max-w-lg lg:w-1/3 md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img
                        className="object-cover object-center rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
                        alt={title}
                        src={image || ''}
                    />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font text-3xl md:text-4xl mb-4 font-semibold text-gray-100">
                        {title}
                    </h1>
                    <p className="mb-6 leading-relaxed text-lg text-gray-300">
                        {desc}
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


            </div>
        </section>

    )

}


export default id