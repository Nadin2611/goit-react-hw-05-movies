import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FormContainer, Form, Label, Input, Button } from './SearchForm.styled';

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('search') ?? '';

  const handleSubmit = event => {
    event.preventDefault();
    const query = event.target.search.value.trim().toLowerCase();
    if (!query) {
      return toast.warn('Please enter text!');
    } else {
      setSearchParams({ search: query });
      event.target.reset();
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Label>
          <Input
            type="text"
            name="search"
            defaultValue={query}
            placeholder="Enter movie to search..."
            autoComplete="off"
          />
          <Button type="submit">Search</Button>
        </Label>
      </Form>
    </FormContainer>
  );
};

export default SearchForm;
