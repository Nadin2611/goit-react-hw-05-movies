import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect } from 'react';

const MoviesPage = () => {
  useEffect(() => {
    // запит, якщо потрібно - state, loding,error
  }, []);
  return <SearchForm />;
};

export default MoviesPage;
