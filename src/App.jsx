import { useState } from "react";
import MovieList from "./components/MovieList";
import Panel from "./components/Panel";
import SearchBar from "./components/SearchBar";
import AddMovieForm from "./components/AddMovieForm";
import { movies as initialMovies } from "./data/movies.js";

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [likedIds, setLikedIds] = useState([]);
  const [query, setQuery] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.trim().toLowerCase()),
  );

  function toggleLike(id) {
    setLikedIds((currentLikedIds) =>
      currentLikedIds.includes(id)
        ? currentLikedIds.filter((likedId) => likedId !== id)
        : [...currentLikedIds, id],
    );
  }

  return (
    <Panel title="Catalogue">
      <p>Films aimés: {likedIds.length}</p>
      <div className="toolbar">
        <SearchBar
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <AddMovieForm
        onAdd={(movie) =>
          setMovies((currentMovies) => [...currentMovies, movie])
        }
      />
      {filteredMovies.length > 0 ? (
        <MovieList
          movies={filteredMovies}
          likedIds={likedIds}
          toggleLike={toggleLike}
        />
      ) : (
        <p className="empty">Aucun film ne correspond à « {query.trim()} »</p>
      )}
    </Panel>
  );
}

export default App;
