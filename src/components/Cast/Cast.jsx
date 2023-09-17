import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'API/API';
import { CastList } from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId).then(setCast);
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <div>
      <CastList>
        {cast.map(actor => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : `https://abiturient.mgimo.ru/upload/images/no-img.png`
              }
              alt={actor.profile_path}
              loading="lazy"
              width="100"
              height="150"
            />
            <h3>★ {actor.name}</h3>
            <p>Сharacter: {actor.character}</p>
          </li>
        ))}
      </CastList>
    </div>
  );
};
