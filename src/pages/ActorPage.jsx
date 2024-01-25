import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import SearchForm from 'components/SearchForm/SearchForm';
import ActorList from 'components/ActorList/ActorList';
import { Loader } from 'components/Loader/Loader';
import getMovies from 'service/api';
import { Container } from 'components/Container/Container.styled';

const ActorPage = () => {
  const [searchParams] = useSearchParams();
  const [actorsByKeyword, setActorsByKeyword] = useState([]);
  const [popularActors, setPopularActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const query = searchParams.get('search') ?? '';

  useEffect(() => {
    const fetchPopularActors = async () => {
      try {
        const personData = await getMovies('person/popular');

        setPopularActors(personData.results);
      } catch (error) {
        console.error('Error fetching popular actors:', error.message);
      }
    };
    fetchPopularActors();
  }, []);

  const fetchActorsByKeyword = useCallback(async () => {
    try {
      setIsLoading(true);
      const actorsData = await getMovies('search/person', { query });

      if (actorsData.results.length === 0) {
        toast.warn(
          'Sorry, there are no movies matching your search query. Please try again.'
        );
      } else {
        toast.info(
          `Found ${actorsData.results.length} ${
            actorsData.results.length === 1 ? 'person' : 'persons'
          }.`
        );
      }

      setActorsByKeyword(actorsData.results);
      setIsLoading(false);
    } catch (error) {
      toast.error('Something went wrong!!!');
    } finally {
      setIsLoading(false);
    }
  }, [query]);

  useEffect(() => {
    if (!query) return;
    fetchActorsByKeyword();
  }, [fetchActorsByKeyword, query]);

  return (
    <Container>
      <SearchForm />
      {isLoading && <Loader />}

      {actorsByKeyword.length > 0 && <ActorList persons={actorsByKeyword} />}
      {query === '' && (
        <>
          <h1>Popular actors</h1>
          <div>
            <ActorList persons={popularActors} />
          </div>
        </>
      )}
    </Container>
  );
};

export default ActorPage;
