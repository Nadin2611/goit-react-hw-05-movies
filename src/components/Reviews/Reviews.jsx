import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import getMovies from 'service/api';
import { Loader } from 'components/Loader/Loader';
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
  const [error, setError] = useState('');

  useEffect(() => {
    if (!movieId) return;
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        setError('');

        const fetchData = await getMovies(`movie/${movieId}/reviews`);

        setReviews(fetchData.results);
      } catch (error) {
        setError('Something went wrong!!!');
        toast.error(error.message);
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
      {isLoading && <Loader />}
      {error && <p>Error</p>}
      {reviews.length > 0 ? (
        <ReviewsList>
          {reviews.map(review => (
            <ReviewsItem key={review.id}>
              <ReviewersName>{review.author}</ReviewersName>
              <Review>{review.content}</Review>
            </ReviewsItem>
          ))}
        </ReviewsList>
      ) : (
        <p>We don&#x27;t have any reviews for this movie.</p>
      )}
    </Container>
  );
};

export default Reviews;
