import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

import { Container } from 'components/Container/Container.styled';
import { getMovies } from 'service/api';

const MoviesPage = () => {
  const [searchParams] = useSearchParams();
  const [moviesByKeyword, setMoviesByKeyword] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const query = searchParams.get('search') ?? '';

  const fetchMoviesByKeyword = useCallback(async () => {
    try {
      setIsLoading(true);
      const moviesData = await getMovies('search/movie', { query });

      if (moviesData.results.length === 0) {
        toast.warn(
          'Sorry, there are no movies matching your search query. Please try again.'
        );
      } else {
        toast.info(
          `Found ${moviesData.results.length} ${
            moviesData.results.length === 1 ? 'movie' : 'movies'
          }.`
        );
      }

      setMoviesByKeyword(moviesData.results);
      setIsLoading(false);
    } catch (error) {
      toast.error('Something went wrong!!!');
    } finally {
      setIsLoading(false);
    }
  }, [query]);

  useEffect(() => {
    if (!query) return;
    fetchMoviesByKeyword();
  }, [fetchMoviesByKeyword, query]);

  return (
    <Container>
      <SearchForm />
      {isLoading && <Loader />}

      {moviesByKeyword.length > 0 && <MoviesList movies={moviesByKeyword} />}
    </Container>
  );
};

export default MoviesPage;
