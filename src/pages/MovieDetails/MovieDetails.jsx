import styled from 'styled-components';
import { Suspense, useEffect, useState } from 'react';
import {
  Outlet,
  useLocation,
  useNavigate,
  useParams,
  NavLink,
} from 'react-router-dom';
import { ButtonGoBack } from 'components/ButtonGoBack/ButtonGoBack';
import { getDetails } from 'API/API';
import {
  PhotoMovie,
  PhotoAndDescription,
  Nav,
  AdditionalInformation,
} from './MovieDetails.styled';

const StyledLink = styled(NavLink)`
  color: blue;
`;

const MoviesDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleButtonGoBack = () => {
    navigate(location.state.from);
  };

  useEffect(() => {
    getDetails(movieId).then(response => setMovie(response));
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <>
      <div>
        <ButtonGoBack onClick={handleButtonGoBack} />
        <PhotoAndDescription>
          <PhotoMovie
            src={
              movie.poster_path
                ? `https://www.themoviedb.org/t/p/w300/${movie.poster_path}`
                : `https://abiturient.mgimo.ru/upload/images/no-img.png`
            }
            alt={movie.title}
          />
          <div>
            <h2>{movie.title}</h2>
            <p>User Score: {`${Math.round(movie.vote_average * 10)}%`}</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <ul>
              {movie.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </PhotoAndDescription>
        <AdditionalInformation>
          <h3>Additional information</h3>
          <Nav>
            <StyledLink to="cast" state={location.state}>
              Cast
            </StyledLink>
            <StyledLink to="reviews" state={location.state}>
              Reviews
            </StyledLink>
          </Nav>
        </AdditionalInformation>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MoviesDetails;
