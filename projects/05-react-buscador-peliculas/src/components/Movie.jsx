export default function Movie({ movie }) {
  const { title, poster, year } = movie;
  return (
    <div className="movie-card">
      <div className="movie-header">{title}</div>
      <div className="movie-body">
        <img src={poster} alt={title} />
      </div>
      <div className="movie-footer">
        <span>{year}</span>
      </div>
    </div>
  );
}
