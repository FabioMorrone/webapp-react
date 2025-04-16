import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export default function Home() {


    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/movies', {})
            .then(res => {
                return res.json();
            })
            .then(data => {
                setMovies(data)
                console.log(movies);

            })
    }, [])


    return (
        <>

            <main>
                <div className="container p-4 ">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                        {movies.map(movie => (
                            <div className="col" key={movie.id}>
                                <Link to={`/SingoloFilm/${movie.id}`} className="text-decoration-none">
                                    <div className="card h-100 shadow-sm bg-info">
                                        <div className="position-relative">
                                            <img
                                                className="card-img-top"
                                                src={`http://localhost:3000/img/${movie.image}`}
                                                alt={movie.name}
                                                style={{ height: '300px', objectFit: 'cover' }}
                                            />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title text-dark">{movie.title}</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </main>


        </>
    )
}