import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import getMovies from 'service/api';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesByKeyword, setMoviesByKeyword] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    const searchValue = searchParams.get('search');
    if (searchValue) setQuery(searchValue);
  }, [searchParams]);

  const handleChange = value => {
    if (!value) setSearchParams({});
    setQuery(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      return toast.warn('Please enter text!');
    } else {
      setSearchParams({ search: query });
      fetchMoviesByKeyword();
    }
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} onChange={handleChange} />
      {isLoading && <Loader />}

      {!isLoading && <MoviesList movies={moviesByKeyword} />}
    </>
  );
};

export default MoviesPage;
