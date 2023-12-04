import { FormContainer, Form, Label, Input, Button } from './SearchForm.styled';

const SearchForm = ({ searchQuery, handleSubmit, handleChange }) => {
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Label></Label>
        <Input
          type="text"
          value={searchQuery}
          placeholder="Enter text to search"
          onChange={handleChange}
        />
        <Button type="submit">Search</Button>
      </Form>
    </FormContainer>
  );
};

export default SearchForm;
