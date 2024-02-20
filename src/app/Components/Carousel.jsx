"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import { imageUrl } from "@/lib/api";
import { useGetMovies } from "@/hooks/useMovies"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useParams, useSearchParams } from 'next/navigation'

export default function CarouselComponent() {
    const params = useSearchParams()
    const data = useGetMovies(params.get('page'))
    const [carouselData, setCarouselData] = useState([]);

    useEffect(() => {
        if (data && data.results) {
            const firstThreeItems = data.results.slice(0, 3);
            setCarouselData(firstThreeItems);
        }
    }, [data]);

    return (
        <Carousel className="custom-carousel" showArrows={true} showStatus={false} showThumbs={false}>
            {carouselData.map((item, index) => (
                <div key={item.id}>
                    <img src={imageUrl + item.poster_path} alt={item.title} style={{ height: '500px' }} />
                </div>
            ))}
        </Carousel>
    )
}