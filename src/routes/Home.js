import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

/* 
첫 랜더가 끝나면 getMovies() 를 실행하고
사이트에서 값을 받아오는데 await 로 인해 받아오기 전까지는
setState 가 동작하지 않는다
모두 받아오면 setState 가 동작하고 로딩이 false 가 되며
Movie 컴포넌트를 불러온다
*/
class Home extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };
    getMovies = async () => {
        const {
            data: {
                data: {
                    movies
                }
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        this.setState({movies, isLoading: false});
    };
    componentDidMount() {
        this.getMovies();
    }
    render() {
        //es6, this.state.isLoading == isLoading
        const {isLoading, movies} = this.state;
        return (
            <section className="container">
                {
                    isLoading
                        ? (
                            <div className="loader">
                                <span className="loader__text">Loading...</span>
                            </div>
                        )
                        : (
                            <div className="movies">
                                {
                                    movies.map(movie => (
                                        <Movie
                                            key={movie.id}
                                            id={movie.id}
                                            year={movie.year}
                                            title={movie.title}
                                            summary={movie.summary}
                                            poster={movie.medium_cover_image}
                                            genres={movie.genres}/>
                                    ))
                                }
                            </div>
                        )
                }
            </section>
        );
    }
}

export default Home;