export default function MovieCard({ movie, onOpen }) {
  const avg = movie.averageRating
    ? movie.averageRating
    : movie.imdbRating
    ? Math.round((movie.imdbRating / 2) * 10) / 10
    : 0;

  const filledStars = Math.round(avg); 

  return (
    <div className="card" onClick={() => onOpen(movie)}>

      <div className="poster-container">
        <img
          src={movie.poster}
          className="card-img-top"
          alt={movie.title}
          onError={e => { e.target.onerror = null; e.target.src = ''; }}
        />

        <div className="overlay">
          <p className="movie-desc">{movie.plot.substring(0, 90)}...</p>
          <button
            className="view-btn"
            onClick={e => { e.stopPropagation(); onOpen(movie); }}
          >
            ▶︎ View Details
          </button>
        </div>
      </div>

      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>

        <div className="card-meta">
          <p className="card-year">{movie.year}</p>
          <p className="card-dot"></p>
          <p className="card-genre">{movie.genre[0]}</p>
        </div>

        {/* ── Star rating row ── */}
        <div className="card-rating">
          <div className="card-stars">
            {[1, 2, 3, 4, 5].map(star => (
              <span
                key={star}
                className={`card-star ${star <= filledStars ? 'filled' : ''}`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="card-avg">{avg.toFixed(1)}</span>
          <span className="card-avg-label">avg</span>
        </div>

      </div>
    </div>
  );
}