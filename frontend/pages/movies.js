import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Movies = ({ data }) => {
    const main_data = data.titles;

    return (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg">
            <a className="block relative h-60 rounded overflow-hidden">
                <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={main_data.jawSummary.backgroundImage.url}
                />
            </a>
            <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{main_data.title}</h2>
                <p className="mt-1">{main_data.price}</p>
            </div>
        </div>
    );
};

const MoviesPage = () => {
    const [moviesData, setMoviesData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '64f91a2064msh4747489567f1dacp1680b2jsn11cb6487baaa',
                    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com',
                },
            };

            try {
                const response = await fetch(url, options);
                const data = await response.json();
                setMoviesData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {moviesData ? (
                <Movies data={moviesData} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default MoviesPage;
