import { FormContainer, Form, Label, Input, Button } from './SearchForm.styled';

const SearchForm = ({ query, onSubmit, onChange }) => {
  return (
    <FormContainer>
      <Form onSubmit={onSubmit}>
        <Label></Label>
        <Input
          type="text"
          name="search"
          value={query}
          onChange={onChange}
          placeholder="Enter text to search..."
        />
        <Button type="submit">Search</Button>
      </Form>
    </FormContainer>
  );
};

export default SearchForm;
