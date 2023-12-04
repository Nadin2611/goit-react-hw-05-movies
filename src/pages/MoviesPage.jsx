// import { useState, useEffect, useCallback } from 'react';
// import { useSearchParams } from 'react-router-dom';

// // import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
// import getMovies from 'service/api';

const MoviesPage = () => {
  // // запит, якщо потрібно - state, loding,error
  // const [searchValue, setSearchValue] = useState('');
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [moviesByKeyword, setMoviesByKeyword] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const fetchMoviesByKeyword = useCallback(async () => {
  //   try {
  //     setLoading(true);
  //     const moviesData = await getMovies(
  //       'search/movie',
  //       `&query=${searchValue}`
  //     );
  //     setMoviesByKeyword(moviesData.results);
  //     setLoading(false);
  //   } catch (error) {
  //     setError(error.message);
  //     setLoading(false);
  //   }
  // }, [searchValue]);
  // // useEffect(() => {
  // //   fetchMoviesByKeyword();
  // // }, []);
  // const handleSubmit = value => {
  //   if (!searchValue) {
  //     return setSearchParams({});
  //   }
  //   setSearchParams({ query: value });
  //   fetchMoviesByKeyword();
  // };
  // const handleChange = event => {
  //   setSearchParams({ searchValue: event.target.value });
  //   setSearchValue(event.target.value, () => {
  //     console.log(searchValue);
  //   });
  // };
  return (
    <>
      {/* <SearchForm /> */}
      {/* {loading && <p>Loading...</p>} */}
      {/* {error && <p>Error: {error.message}</p>} */}
      {/* {!loading && !error && <MoviesList movies={moviesByKeyword} />} */}
    </>
  );
};

export default MoviesPage;
