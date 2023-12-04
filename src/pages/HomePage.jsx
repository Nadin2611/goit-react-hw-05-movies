import { useEffect, useState } from 'react';
import getMovies from 'service/api';
import MoviesList from 'components/MoviesList/MoviesList';

const HomePage = () => {
  const [trendingMovies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const trendingEndpoint = await getMovies('/trending/movie/week');

        console.log(trendingEndpoint);
        setMovies(trendingEndpoint.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error.message);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <div>
        <MoviesList movies={trendingMovies} />
      </div>
    </div>
  );
};

export default HomePage;
