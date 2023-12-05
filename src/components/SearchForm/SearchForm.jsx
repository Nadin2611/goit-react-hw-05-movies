import { useSearchParams } from 'react-router-dom';
import { FormContainer, Form, Label, Input, Button } from './SearchForm.styled';

const SearchForm = ({ searchQuery, onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('search') ?? '';

  const handleSubmit = event => {
    event.preventDefault();

    const query = event.target
      .querySelector('input')
      .value.trim()
      .toLowerCase();
    if (!query) return;
    setSearchParams({ search: query });
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Label></Label>
        <Input
          type="text"
          value={query}
          placeholder="Enter text to search"
          onChange={() => {}}
        />
        <Button type="submit">Search</Button>
      </Form>
    </FormContainer>
  );
};

export default SearchForm;
