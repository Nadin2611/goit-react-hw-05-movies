import { useSearchParams } from 'react-router-dom';
import { FormContainer, Form, Label, Input, Button } from './SearchForm.styled';
// import { useState } from 'react';

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('searchInput') || '';
  //   const [searchMovies, setSearchMovies] = useState([]);

  //   const filteredMovies = searchMovies.filter(movie => movie.includes(movieId));

  return (
    <FormContainer>
      <Form>
        <Label></Label>
        <Input
          type="text"
          value={movieId}
          placeholder="Enter text to search"
          onChange={event =>
            setSearchParams({ searchInput: event.target.value })
          }
        />
        <Button type="submit">Search</Button>
      </Form>
    </FormContainer>
  );
};

export default SearchForm;
