import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { handleScroll } from 'service/scroll';
import { getMovies } from 'service/api';

import {
  Container,
  ReviewsList,
  ReviewsItem,
  ReviewersName,
  Review,
  ShowMoreButton,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showFullText, setShowFullText] = useState(false);

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
        handleScroll('reviews');
      }
    };
    if (!movieId) {
      return;
    }
    fetchReviews();
  }, [movieId]);

  const handleShowMore = reviewId => {
    setShowFullText(prevShowFullText => ({
      ...prevShowFullText,
      [reviewId]: !prevShowFullText[reviewId],
    }));
  };

  return (
    <Container>
      {!isLoading && reviews.length === 0 && (
        <p>We don&#x27;t have any reviews for this movie.</p>
      )}
      {reviews && (
        <ReviewsList name="reviews">
          {reviews.map(review => (
            <ReviewsItem key={review.id}>
              <ReviewersName>{review.author}</ReviewersName>
              <Review>
                {showFullText[review.id]
                  ? review.content
                  : `${review.content.slice(0, 200)}...`}
              </Review>
              {!showFullText[review.id] && (
                <ShowMoreButton onClick={() => handleShowMore(review.id)}>
                  Show More...
                </ShowMoreButton>
              )}
            </ReviewsItem>
          ))}
        </ReviewsList>
      )}
    </Container>
  );
};

export default Reviews;
