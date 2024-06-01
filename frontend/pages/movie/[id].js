import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';


const id = () => {

    const [maindata, setMainData] = useState([]);

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
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData()
    }, [id])



    return (

        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src={maindata.backgroundImage?.url || ''} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-5 font-medium text-gray-900">{maindata.title}
                    </h1>
                    <p className="mb-8 leading-relaxed">{maindata.synopsis}</p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Watch Now</button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Add to watchlist</button>
                    </div>
                </div>
            </div>
        </section>

    )

}


export default id
