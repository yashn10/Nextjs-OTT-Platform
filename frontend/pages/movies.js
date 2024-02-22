import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation'


const Movies = () => {
    const router = useRouter()
    const [maindata, setMainData] = useState([]);

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

            } catch (error) {
                console.error(error);
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

        <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto">
                <h1 style={{
                    "textAlign": "center", "marginBottom": "2%", "fontSize": "xx-large", "fontStyle": "italic",
                }}>Series & Movie</h1>
                <hr />
                <div className="flex flex-wrap -m-4" style={{ "marginTop": "3%" }}>
                    {maindata.length > 0 ? (
                        maindata.map((data) => (
                            <div key={data.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={data.backgroundImage.url} />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{data.title}</h2>
                                    <p className="mt-1">{data.synopsis.substring(0, 100)}...</p>
                                </div>
                                <Link onClick={() => checklogin(data.id)} href={`/movie/${data.id}`}>
                                    <button style={{
                                        "padding": "10px 20px", "width": "100%", "backgroundColor": "antiquewhite", "marginTop": "7%",
                                    }}>
                                        Visit Now
                                    </button>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p>Loading please wait ...</p>
                    )}
                </div>
            </div>
        </section >

    );
};

export default Movies;
