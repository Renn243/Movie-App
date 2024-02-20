"use client"
import { useState, useEffect } from 'react'
import axios from '@/lib/api'

const useGetMovies = (sortBy, page = 1) => {
    const [dataMovies, setDataMovies] = useState([])

    useEffect(() => {
        axios.get(`/discover/movie?page=${page}&sort_by=${sortBy}`)
            .then((res) => setDataMovies(res.data))
            .catch((err) => console.log(err))
    }, [page, sortBy])
    console.log(page)

    return dataMovies
}

export {
    useGetMovies
}