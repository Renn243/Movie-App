import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import apiAxios from '@/lib/api';

export default function DetailMovie() {
    const router = useRouter();
    const { id } = router.query;
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        if (id) {
            apiAxios.get(`/movie/${id}`)
                .then((res) => setMovie(res.data))
                .catch((err) => console.error(err));
        }
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>Release Date: {movie.release_date}</p>
            <p>Director: {movie.director}</p>

        </div>
    );
}