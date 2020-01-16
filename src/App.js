import React from "react";
import {HashRouter, Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

// 라우터는 url 과 매칭해줌
// 라우터에는 종류가 많은데 깃허브에 올리기에는 해시라우터가 편함
// 브라우저라우터 라고 있는데 깃허브에 올리려면 설정할게 복잡해서 해시로 자주씀
function App() {
    return (
        <HashRouter>
            <Navigation/>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/movie/:id" component={Detail}/>
        </HashRouter>
    );
}
/*
라우트에 path 는 주소뒤에 붙는 것 component 는 이동할 js
exact 는 무엇이냐 완전히 주소가 같아야만 이동
왜 존재하냐면
/ 과 /about 은 중복될 수 있음
즉 주소/about 으로 가면 라우터에서 해석하길
/ 있네? home 키고 /about 도 있네? 둘다 렌더링하자!
그래서 2개가 렌더링되고 화면에 겹침 이거를 방지하기 위해서
당연하게도
/home /about 은 안겹치고 /home /home/about 이런건 겹침

/movie 뒤에 id는 props 를 이용해서 각 무비의 상세 설명 주소

Nav 는 모든 화면에서 보임 
*/

export default App;