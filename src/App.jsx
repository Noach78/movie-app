import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import Panel from "./components/Panel";
import SearchBar from "./components/SearchBar";
import AddMovieForm from "./components/AddMovieForm";
import { getJSON } from "./api.js";

function App() {
  const [movies, setMovies] = useState([]);
  const [likedIds, setLikedIds] = useState([]);
  const [query, setQuery] = useState("");
  const [loadStatus, setLoadStatus] = useState("loading");

  useEffect(() => {
    getJSON("/api/movies")
      .then((data) => {
        setMovies(data);
        setLoadStatus(data.length === 0 ? "empty" : "success");
      })
      .catch((error) => {
        setLoadStatus("error");
        console.error("Impossible de charger les films :", error);
      });
  }, []);

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
        onAdd={(movie) => {
          setMovies((currentMovies) => [...currentMovies, movie]);
          setLoadStatus("success");
        }}
      />
      {loadStatus === "loading" ? (
        <p role="status">Chargement des films…</p>
      ) : loadStatus === "error" ? (
        <p role="alert">Impossible de charger les films. Vérifiez que l’API est démarrée.</p>
      ) : loadStatus === "empty" ? (
        <p className="empty">La liste des films est vide.</p>
      ) : filteredMovies.length > 0 ? (
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
