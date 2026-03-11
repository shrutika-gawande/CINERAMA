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
                        View Details
                    </button>
                </div>
            </div>

            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.year} • {movie.genre[0]}</p>
                <p>Rating</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    )
}