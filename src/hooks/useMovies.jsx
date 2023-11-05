"use client"
import { useState, useEffect } from 'react'
import axios from '@/lib/api'

const useGetMovies = (page = 1, selectedGenre) => {
    const [dataMovies, setDataMovies] = useState([])

    useEffect(() => {
        axios.get(`/discover/movie?page=${page}&with_genres=${selectedGenre}`)
            .then((res) => setDataMovies(res.data))
            .catch((err) => console.log(err))
    }, [page, selectedGenre])
    console.log(page)

    return dataMovies
}

export {
    useGetMovies
}