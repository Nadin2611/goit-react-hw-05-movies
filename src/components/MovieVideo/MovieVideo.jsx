const MovieVideo = ({ name, type, official, videoKey }) => {
  return (
    type === 'Trailer' &&
    official === true && (
      <div>
        <iframe
          title={name}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoKey}`}
          allowFullScreen="true"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    )
  );
};

export default MovieVideo;
