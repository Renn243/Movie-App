"use client"
import { useGetMovies } from "@/hooks/useMovies"
import Card from "../Components/Card";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import Link from "next/link";
import { useParams, useSearchParams } from 'next/navigation'
import { useState, useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { imageUrl } from "@/lib/api";

export default function ListMovie() {
    const params = useSearchParams()
    const data = useGetMovies(params.get('page'))
    const [selectedGenre, setSelectedGenre] = useState('');
    const [carouselData, setCarouselData] = useState([]);
    console.log(data);

    const [activePage, setActivePage] = useState(1);

    useEffect(() => {
        if (data && data.results) {
            const firstThreeItems = data.results.slice(0, 3);
            setCarouselData(firstThreeItems);
        }
    }, [data]);

    return (
        <>
            <div>
                <Carousel className="custom-carousel" showArrows={true} showStatus={false} showThumbs={false}>
                    {carouselData.map((item, index) => (
                        <div key={item.id}>
                            <img src={imageUrl + item.poster_path} alt={item.title} style={{ height: '500px' }} />
                        </div>
                    ))}
                </Carousel>
            </div>

            <div className="container mx-auto mt-10">
                <div>
                    <h1 className="text-xl text-gray-400 font-extrabold">Browse by category</h1>
                    <ul className="text-gray-300 font-bold py-10 flex items-center lg:gap-20 gap-3">
                        <li>
                            <button onClick={() => setSelectedGenre('')}>All</button>
                        </li>
                        <li>
                            <button onClick={() => setSelectedGenre('Animation')}>Anime</button>
                        </li>
                        <li>
                            <button onClick={() => setSelectedGenre('Adventure')}>Adventure</button>
                        </li>
                        <li>
                            <button onClick={() => setSelectedGenre('Science Fiction')}>Science Fiction</button>
                        </li>
                        <li>
                            <button onClick={() => setSelectedGenre('Comedy')}>Comedy</button>
                        </li>
                    </ul>
                </div>

                <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 justify-center sm:justify-around gap-5">
                    {data?.results?.map((item, index) => (
                        <Link href={`/movie`} key={item.id}>
                            <Card
                                image={item.poster_path}
                                overview={item.overview}
                                id={item.id}
                                popularity={item.popularity}
                                title={item.title}
                            />
                        </Link>
                    ))}
                </div>

                <div className="text-xl flex justify-center gap-10 mt-10 py-10">
                    <ul className="flex items-center lg:gap-20 gap-10">
                        <li>
                            <AiOutlineArrowLeft />
                        </li>
                        <li>
                            <Link href="/?page=1" onClick={() => setActivePage(1)} className={activePage === 1 ? 'active' : ''}>
                                1
                            </Link>
                        </li>
                        <li>
                            <Link href="/?page=2" onClick={() => setActivePage(2)} className={activePage === 2 ? 'active' : ''}>
                                2
                            </Link>
                        </li>
                        <li>
                            <Link href="/?page=3" onClick={() => setActivePage(3)} className={activePage === 3 ? 'active' : ''}>
                                3
                            </Link>
                        </li>
                        <li>
                            <Link href="/?page=4" onClick={() => setActivePage(4)} className={activePage === 4 ? 'active' : ''}>
                                4
                            </Link>
                        </li>
                        <li>
                            <Link href="/?page=5" onClick={() => setActivePage(5)} className={activePage === 5 ? 'active' : ''}>
                                5
                            </Link>
                        </li>
                        <li>
                            <AiOutlineArrowRight />
                        </li>
                    </ul>

                </div>
            </div>
        </>
    )
}