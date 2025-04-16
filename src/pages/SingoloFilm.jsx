import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function film() {
    const [singoloFIlm, setsingoloFilm] = useState([])

    const navigate = useNavigate()

    const { id } = useParams()

    useEffect(() => {

        fetch(`http://localhost:3000/api/v1/movies/${id}`)
            .then(res => res.json())
            .then(data => {
                setsingoloFilm(data)

            })

    }, [id])



    return (
        <>
            <main>

                <div className="container">
                    <div className="row p-3 row-cols-1 row-cols-sm-2 g-4">
                        <div className="col-12 col-md-5">
                            <img className="img-fluid shadow-xl" src={`http://localhost:3000/img/${singoloFIlm.image}`} alt={singoloFIlm.title} />
                        </div>
                        <div className="col-12 col-md-7">

                            <h1 className="text-light">Film: {singoloFIlm.title}</h1>
                            <p className="text-light">Descrizione: {singoloFIlm.abstract}</p>

                            <h2 className="mt-3 text-light"> RECENSIONI</h2>
                            <div className="row g-4 mt-3">
                                {singoloFIlm.reviews && singoloFIlm.reviews.map((recensione) => (
                                    <div className="col-12 col-md-6" key={recensione.id}>
                                        <div className="card  text-dark shadow-lg bg-emphasis">
                                            <div className="card-body bg-emphasis">
                                                <h4 className="card-title">USERNAME: {recensione.name}</h4>
                                                <p className="card-text">RECENSIONE: {recensione.text}</p>
                                                <p className="card-text">VOTO: {recensione.vote}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </main >
        </>
    );
}