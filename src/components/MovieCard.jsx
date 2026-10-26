export default function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <img src={movie.posterUrl} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
            <p>{movie.description}</p>
            <RatingBadge rating={movie.rating} />
        </div>
    )
}