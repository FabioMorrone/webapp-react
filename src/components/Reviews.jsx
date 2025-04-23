import { useState } from "react";



export default function Reviews({ movieId, onReviewSubmit }) {

    const [formData, setFormData] = useState({
        vote: 5,
        text: "",
        username: "",
    });



    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3000/api/v1/movies/${movieId}/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then(() => {
                setFormData({ vote: 5, text: "", username: "" });
                if (onReviewSubmit) onReviewSubmit();
            })
            .catch((err) => {
                console.error("Error submitting review:", err);
            });
    };

    return (
        <>
            <div className="mt-4">
                <h4 className="mt-5">Recensisci</h4>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Recensione</label>
                        <textarea
                            className="form-control"
                            rows="3"
                            value={formData.text}
                            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                            required
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">voto da (1-5)</label>
                        <input
                            type="number"
                            className="form-control"
                            min="1"
                            max="5"
                            value={formData.vote}
                            onChange={(e) => setFormData({ ...formData, vote: e.target.value })}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>

        </>
    );
}