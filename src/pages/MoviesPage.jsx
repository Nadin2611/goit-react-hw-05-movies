import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import getMovies from 'service/api';

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  // запит, якщо потрібно - state, loding,error
  useEffect(() => {
    console.log('Search Query:', searchQuery);
    const fetchSearchMovies = async () => {
      if (!searchQuery) {
        return;
      }
      try {
        setLoading(true);
        const searchEndpoint = await getMovies(`search/movie`, {
          query: searchQuery,
        });
        setFilteredMovies(searchEndpoint.results);

        console.log(searchEndpoint);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchSearchMovies();
  }, [searchQuery]);

  const handleSubmit = () => {};

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!loading && !error && <MoviesList movies={filteredMovies} />}
    </>
  );
};

export default MoviesPage;
