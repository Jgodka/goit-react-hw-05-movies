import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'API/API';
import { ReviewsList } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(setReviews);
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <div>
      <ReviewsList>
        {reviews.length === 0
          ? "Sorry, but we don't have any reviews for this movie"
          : reviews.map(({ author, content, id }) => (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            ))}
      </ReviewsList>
    </div>
  );
};
