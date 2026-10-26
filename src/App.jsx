import MovieList from './components/MovieList';
import Panel from './components/Panel';
import { movies } from './data/movies.js';

function App() {
  return (
    <Panel title="Catalogue">
      <MovieList movies={movies} />
    </Panel>
  );
}

export default App
