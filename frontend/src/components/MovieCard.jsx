export default function MovieCard({ movie }) {
    return (
        <div className="card">
            <div className="poster-container">
                <img src={movie.poster} className="card-img-top" alt={movie.title} />

                <div className="overlay">
                    <p className="movie-desc">
                        {movie.plot.substring(0, 90)}...
                    </p>

                    <button className="view-btn">
                        ▶︎ View Details
                    </button>
                </div>
            </div>

            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <div className="card-meta">
                    <p className="card-year">{movie.year}</p>
                    <p className="card-dot"> • </p>
                    <p className="card-genre">{movie.genre[0]}</p>
                </div>
                <p>Rating</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    )
}