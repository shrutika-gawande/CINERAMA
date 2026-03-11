export default function MovieCard({movie}) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={movie.poster} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.year} • {movie.genre}</p>
                <p>Rating</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    )
}