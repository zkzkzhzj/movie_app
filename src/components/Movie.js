import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

/* 
Movie 함수형 컴포넌트에서 props 받고
Link 속성으로 route 간의 props 전달 가능
pathname 는 주소값
state 값에 추가 데이터 넣어줬다
*/
// 링크 자체에 클릭 이벤트가 있는듯 클릭이되네
// 클릭하면 /movie/id 값으로 이동하고 state 에 정보를 담아서 보냄
// 즉 route 의 path 와 같아야 동작을 한다는거네 
// pathname 이 이동할 주소 설정인듯
// 만약 route movies2 라던지 주소가 안맞으면 
// 이동은 하나 아무런 데이터가 표시되지 않는 movie/id~ 웹 페이지가 열린다
// 새로운 화면? 컴포넌트는 되는듯 하다
function Movie({id, year, title, summary, poster, genres}) {
    return (
        <div className="movie">
            <Link
                to={{
                    pathname: `/movie/${id}`,
                    state: {
                        year,
                        title,
                        summary,
                        poster,
                        genres
                    }
                }}>
                <img src={poster} alt={title} title={title}/>
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                        {
                            genres.map((genre, index) => (
                              // genres 값 만큼 li 생성
                                <li key={index} className="genres__genre">
                                    {genre}
                                </li>
                            ))
                        }
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 180)}...</p>
                </div>
            </Link>
        </div>
    );
}
// slice 는 string 자르는

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes
        .arrayOf(PropTypes.string)
        // propsTypes 로 배열은 이렇게 체크가능하다!
        .isRequired
};

export default Movie;