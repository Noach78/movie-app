import MovieCard from './MovieCard';

export default function MovieList({ movies, likedIds, toggleLike }) {
    return (
        <div className="movie-grid">
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} isLiked={likedIds.includes(movie.id)} onToggleLike={toggleLike} />
            ))}
        </div>
    )
}