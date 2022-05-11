import React from "react";

import {
  Route,
  Routes,
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";

import './App.css';

import Home from "./pages/Home";
import ArticleList from "./pages/ArticleList";
import SubmitArticle from "./pages/Submit-Article";
import NotFoundPage from "./pages/404";

const App = () => {
  return (
    <Router>
      <div>
        <h1>민식이의 익명 게시판 프로젝트(프로젝트 명 미정…)</h1>
        <ul className="header">
          <li><NavLink exact="true" to="/">메인 화면</NavLink></li>
          <li><NavLink to="/ArticleList">게시판 목록</NavLink></li>
          <li><NavLink to="/SubmitArticle">게시판 등록</NavLink></li>
        </ul>

        <div className="content">
          <Routes>
            <Route exact="true" path="/" component={Home} />
            <Route path="/ArticleList" component={ArticleList} />
            <Route path="/SubmitArticle" component={SubmitArticle} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;