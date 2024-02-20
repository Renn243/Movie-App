"use client"
import { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useParams, useSearchParams } from 'next/navigation'
import Link from "next/link";
import Card from "../Components/Card";
import { useGetMovies } from "@/hooks/useMovies"

export default function ListMovie() {
    const params = useSearchParams()
    const [sortBy, setSortBy] = useState('popularity.desc')
    const data = useGetMovies(sortBy, params.get('page'))
    const [activePage, setActivePage] = useState(1);

    return (
        <>
            <main className='container mx-auto lg:px-40 px-10 mt-10'>
                <div className="text-lg py-10">
                    <span className="pr-5">Sort By</span>
                    <select name="" id="" className="p-2 border border-2 rounded-md border-gray-400 focus:border-4" onChange={e => setSortBy(e.target.value)}>
                        <option value="popularity.desc">Popularity Desc</option>
                        <option value="popularity.asc">Popularity Asc</option>
                    </select>
                </div>
                <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 justify-center sm:justify-around gap-5">
                    {data?.results?.map((item, index) => (
                        <Card image={item.poster_path} overview={item.overview} id={item.id} popularity={item.popularity} title={item.title} key={item.id} />
                    ))}
                </div>
                <div className="flex justify-center gap-10 my-20">
                    <ul className="flex items-center lg:gap-20 gap-10">
                        <li>
                            <AiOutlineLeft />
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
                            <AiOutlineRight />
                        </li>
                    </ul>
                </div>
            </main >
        </>
    )
}