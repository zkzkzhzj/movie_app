import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDom 이 App 컴포넌트를 id = root 인 엘리먼트에 집어 넣는다
// 이로 인해 빈 html 을 불러오고 거기에 넣기만 하면되서 속도적으로 빠르다
// 이게 바로 react 의 일, react 가 빠른 이유
// virtual 이고 존재하지 않는다!

/*
클라우드에 올리는 법
npm i gh-pages
허가 모듈
gh-pages 는 웹 사이트를 github의 github page 도메인에 나타나게 해줌

그다음 package.json 가서 설정
https://zkzkzhzj.github.io/movie_app
뒤에 프로젝트 이름
homepage 속성 추가해주면 됨

그다음으로는 script 를 만드는 것 
scripts 속성이 있음
deploy 추가해주자
"deploy" : "gh-pages ??"
?? 쪽에 들어가는 게 폴더라는데 그걸 만들기 위해서

yarn run build 하면 build 파일이 생긴다
"deploy": "gh-pages -d build"
디렉토리 빌드

그리고 그 아래다 predeploy 해준다
"predeploy": "npm run build"
predeploy 가 먼저 실행되는데 build 해줌으로서 웹 서버 켜지는듯
원리는 안피곤할 때 이해하자
아무튼 서버 켜진다 깃허브



새로운걸로 네비게이션을 만든다고 하는데
react-router-dom 을 설치한다
*/