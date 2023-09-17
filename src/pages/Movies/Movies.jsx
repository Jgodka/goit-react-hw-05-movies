import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';
import { getQuery } from 'API/API';
import { MoviesForm, MoviesInput } from './Movies.styled';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ query });
    setQuery('');
  };

  const handleChange = evt => {
    setQuery(evt.target.value);
  };

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }
    getQuery(query).then(setMovies);
  }, [searchParams]);

  return (
    <>
      <MoviesForm onSubmit={handleSubmit}>
        <MoviesInput
          autoComplete="off"
          type="text"
          name="movie"
          onChange={handleChange}
          value={query}
        />
        <button type="submit">Search</button>
      </MoviesForm>
      {<MovieList movies={movies} />}
    </>
  );
};

export default Movies;
