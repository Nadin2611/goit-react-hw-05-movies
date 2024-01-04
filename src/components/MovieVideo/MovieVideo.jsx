import { StyledMovieVideo } from './MovieVideo.styled';

const MovieVideo = ({ name, videoKey }) => {
  return (
    <StyledMovieVideo>
      <iframe
        title={name}
        src={`https://www.youtube.com/embed/${videoKey}`}
        allowFullScreen
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </StyledMovieVideo>
  );
};

export default MovieVideo;
