const MovieVideo = ({ name, videoKey }) => {
  return (
    <div>
      <iframe
        title={name}
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoKey}`}
        allowFullScreen
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default MovieVideo;
