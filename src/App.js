import React from "react";
import axios from "axios";
import Movie from "./components/Movie";
import "./App.css";
// prop-types, axios 다운로드 npm i ~~
class App extends React.Component {
  // component life cycle
  /*
  constructor = 자바스크립트 로딩(first)
  render = second
  DidMount = third

  DidUpdate = 업데이트 시
  DidWillUnMount = 컴포넌트를 떠났을 때(새로고침, 나가기)
  */
  state = {
    isLoading: true,
    movies: []
  };

  // getMovies 에서 데이터를 가져오면 로딩 완료 표시
  getMovies = async () => {
    // es6 data 안 data 안 movies
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts.lt/api/v2/list_movies.json?sort_by=rating"
    );
    // es6 (movies : movies)
    this.setState({ movies, isLoading: false });
  };

  // 랜더가 끝나면 getMovies() 실행
  componentDidMount() {
    this.getMovies();
  }
  render() {
    // ES6 문법, this.state 같은 것들 편하게 사용
    const { isLoading, movies } = this.state;
    return (
      <section name="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
