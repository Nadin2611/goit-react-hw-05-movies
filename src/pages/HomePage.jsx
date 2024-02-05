import { useEffect, useState } from 'react';
import { getMovies } from 'service/api';
import MoviesList from 'components/MoviesList/MoviesList';
import { Container } from 'components/Container/Container.styled';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const trendingData = await getMovies('trending/movie/week');

        setTrendingMovies(trendingData.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error.message);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <Container>
      <h1>Trending today</h1>
      <div>
        <MoviesList movies={trendingMovies} />
      </div>
    </Container>
  );
};

export default HomePage;
