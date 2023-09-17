import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { List } from './MovieList.styled';

const StyledLink = styled(Link)`
  color: blue;
  list-style-type: square;
`;

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(movie => (
        <li key={movie.id}>
          <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
            <p>{movie.title}</p>
          </StyledLink>
        </li>
      ))}
    </List>
  );
};
