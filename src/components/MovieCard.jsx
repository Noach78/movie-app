import RatingBadge from './RatingBadge';

export default function MovieCard({ movie, isLiked, onToggleLike }) {
    return (
        <article className="movie-card">
            {movie.posterUrl ? (
                <img src={movie.posterUrl} alt={movie.title} />
            ) : (
                <div className="poster-placeholder">{movie.title}</div>
            )}
            <h3>{movie.title}</h3>
            {movie.year && <p>{movie.year}</p>}
            {movie.description && <p>{movie.description}</p>}
            <RatingBadge rating={movie.rating} />
            <button onClick={() => onToggleLike(movie.id)}>
                {isLiked ? '❤️' : '🩶'}
            </button>
        </article>
    )
}