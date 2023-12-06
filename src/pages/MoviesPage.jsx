import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import getMovies from 'service/api';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesByKeyword, setMoviesByKeyword] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchMoviesByKeyword = useCallback(async () => {
    try {
      setIsLoading(true);
      const moviesData = await getMovies('search/movie', { query });
      setMoviesByKeyword(moviesData.results);
      setIsLoading(false);
    } catch (error) {
      setError('Something went wrong!!!');
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [query]);

  useEffect(() => {
    const searchValue = searchParams.get('search');
    if (searchValue) setQuery(searchValue);
  }, [searchParams]);

  const handleChange = ({ target: { value } }) => {
    if (!value) setSearchParams({});
    setQuery(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!query) return setSearchParams({});
    setSearchParams({ search: query });
    fetchMoviesByKeyword();
  };

  return (
    <>
      <SearchForm
        query={query}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      {isLoading && <Loader />}
      {error && <p>Error: {error.message}</p>}
      {!isLoading && !error && <MoviesList movies={moviesByKeyword} />}
    </>
  );
};

export default MoviesPage;
