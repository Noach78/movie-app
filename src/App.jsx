import { useState } from 'react';
import MovieList from './components/MovieList';
import Panel from './components/Panel';
import { movies } from './data/movies.js';

function App() {
  const [likedIds, setLikedIds] = useState([]);
  const [ids, setIds] = useState(movies.map(movie => movie.id));

  const toggleLike = (id) => {
    if (likedIds.includes(id)) {
      setLikedIds(likedIds.filter(likedId => likedId !== id));
    } else {
      setLikedIds([...likedIds, id]);
    }
  };

  return (
    <Panel title="Catalogue">
      <p>Films aimés: {likedIds.length}</p>
      <MovieList movies={movies} likedIds={likedIds} toggleLike={toggleLike} />
    </Panel>
  );
}

export default App;