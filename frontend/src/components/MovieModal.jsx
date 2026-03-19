import { useState, useEffect } from "react";
import "../styles/MovieModal.css";

export default function MovieModal({ movie, onClose }) {
  const [hoveredStar, setHoveredStar] = useState(0);
  const [selectedStar, setSelectedStar] = useState(0);
  const [ratingMsg, setRatingMsg] = useState("");

  // Lock background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) onClose();
  }

  function handleStarClick(value) {
    setSelectedStar(value);
    setRatingMsg(`You rated this ${value} star${value > 1 ? "s" : ""} ✓`);
  }

  return (
    <div className="cinerama-modal-backdrop" onClick={handleBackdropClick}>
      <div className="cinerama-modal">

        <button className="cinerama-close-btn" onClick={onClose}>✕</button>

        <div className="cinerama-modal-layout">

          {/* Poster */}
          <div className="cinerama-modal-poster">
            <img src={movie.poster} alt={movie.title} />
          </div>

          {/* Content */}
          <div className="cinerama-modal-content">

            <div className="cinerama-modal-label">{movie.genre[0]}</div>

            <div className="cinerama-modal-title">{movie.title}</div>

            <div className="cinerama-modal-meta">
              {[
                movie.year,
                movie.runtime ? `${movie.runtime} min` : null,
                movie.rated,
                movie.imdbRating ? `★ ${movie.imdbRating}` : null
              ]
                .filter(Boolean)
                .map((tag) => (
                  <span className="cinerama-modal-tag" key={tag}>{tag}</span>
                ))}
            </div>

            <p className="cinerama-modal-desc">{movie.plot}</p>

            <div className="cinerama-modal-cast">
              <div className="cinerama-cast-label">Cast</div>
              <div className="cinerama-cast-list">
                {(Array.isArray(movie.cast) ? movie.cast : (movie.actors || "").split(","))
                  .map((n) => n.trim())
                  .filter(Boolean)
                  .map((name) => (
                    <span className="cinerama-cast-chip" key={name}>{name}</span>
                  ))}
              </div>
            </div>

            <div className="cinerama-modal-rating-section">
              <div className="cinerama-rating-prompt">Your rating for this film:</div>
              <div className="cinerama-modal-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`cinerama-modal-star ${star <= (hoveredStar || selectedStar) ? "filled" : ""}`}
                    onMouseEnter={() => setHoveredStar(star)}
                    onMouseLeave={() => setHoveredStar(0)}
                    onClick={() => handleStarClick(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
              <div className="cinerama-rating-confirmation">{ratingMsg}</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}