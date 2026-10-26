import RatingBadge from './RatingBadge';

export default function MovieCard({ movie }) {
    return (
        <article className="movie-card">
            <img src={movie.posterUrl} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <p>{movie.description}</p>
            <RatingBadge rating={movie.rating} />
        </article>
    )
}