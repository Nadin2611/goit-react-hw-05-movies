import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import getMovies from 'service/api';

import {
  Container,
  ReviewsList,
  ReviewsItem,
  ReviewersName,
  Review,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const fetchReviews = async () => {
      try {
        setIsLoading(true);

        const fetchData = await getMovies(`movie/${movieId}/reviews`);

        setReviews(fetchData.results);
      } catch (error) {
        toast.error('Something went wrong!!!');
      } finally {
        setIsLoading(false);
      }
    };
    if (!movieId) {
      return;
    }
    fetchReviews();
  }, [movieId]);

  return (
    <Container>
      {!isLoading && reviews.length === 0 && (
        <p>We don&#x27;t have any reviews for this movie.</p>
      )}
      {reviews && (
        <ReviewsList>
          {reviews.map(review => (
            <ReviewsItem key={review.id}>
              <ReviewersName>{review.author}</ReviewersName>
              <Review>{review.content}</Review>
            </ReviewsItem>
          ))}
        </ReviewsList>
      )}
    </Container>
  );
};

export default Reviews;
