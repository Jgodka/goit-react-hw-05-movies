import { useState, useEffect } from 'react';
import { getTrending } from 'API/API';
import { MovieList } from 'components/MovieList/MovieList';
import { Main } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending().then(response => {
      setMovies(response.results);
    });
  }, []);

  return (
    <Main>
      <h2>Trending today</h2>
      <MovieList movies={movies} />
    </Main>
  );
};

export default Home;
