import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css";

// 네비게이션으로 모든 컴포넌트에서 보여진다
// Route 에서는 a 대신 Link 와 to 를 사용해서 props 전달하거나 url 세팅한다
// 또한 router 밖에서 Link 를 쓸수 없다
// HashRouter 밖에 Navigation 쓰게되면 router 밖이되므로 안됨
function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;