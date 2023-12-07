import { useSearchParams } from 'react-router-dom';
import { FormContainer, Form, Label, Input, Button } from './SearchForm.styled';

const SearchForm = ({ onSubmit, onChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('search') ?? '';

  const handleChange = event => {
    const newQuery = event.target.value;
    setSearchParams({ search: newQuery });
    onChange(newQuery);
  };

  return (
    <FormContainer>
      <Form onSubmit={onSubmit}>
        <Label></Label>
        <Input
          type="text"
          name="search"
          value={query}
          onChange={handleChange}
          placeholder="Enter text to search..."
        />
        <Button type="submit">Search</Button>
      </Form>
    </FormContainer>
  );
};

export default SearchForm;
