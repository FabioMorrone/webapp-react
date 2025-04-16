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
                <section id="product_details" className="mt-5">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-12 col-md-5">
                                <img className="img-fluid" src={`http://localhost:3000/img/${singoloFIlm.image}`} alt={singoloFIlm.title} />
                            </div>
                            <div className="col-12 col-md-7">

                                <h1 className="text-light">Film: {singoloFIlm.title}</h1>
                                <p className="text-light">{singoloFIlm.abstract}</p>
                                <p className="text-light">recensione {singoloFIlm.reviews}</p>

                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}