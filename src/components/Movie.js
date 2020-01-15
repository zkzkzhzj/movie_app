import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// state 가 필요없을 경우 함수형으로 생성해도 됨
function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="genres">
          {genres.map((genres, index) => (
            <li key={index} className="genres__genre">{genres}</li>
          ))}
        </ul>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

// 사용할 값 타입과 받는지 체크
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
  // 배열 안 값도 이렇게 체크 가능
};

export default Movie;
