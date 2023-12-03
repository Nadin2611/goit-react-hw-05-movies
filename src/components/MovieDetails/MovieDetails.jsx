import { Link } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <div>
      <h2>The King (2019)</h2>
      <img src="movies.jpg" alt="movie-foto" />
      <p>User Score: 74%</p>
      <h3>Overview</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        assumenda cum dolorem accusamus nulla temporibus, consequatur
        architecto? Rerum expedita delectus quia minima molestias, aliquam,
        nostrum, a blanditiis architecto voluptates voluptas.
      </p>
      <h3>Genres</h3>
      <p>Drama History War</p>
      <p>Aditional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </div>
  );
};

export default MovieDetails;
