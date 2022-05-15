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
        <h1>Unknowng &#128123;</h1>
        <ul className="header">
          <li><NavLink exact="true" to="/">메인 화면</NavLink></li>
          <li><NavLink to="/ArticleList">게시판 목록</NavLink></li>
          <li><NavLink to="/SubmitArticle">게시글 등록</NavLink></li>
        </ul>

        <div className="content">

          <Routes>
            <Route exact="true" path="/" element={<Home />} />
            <Route path="/ArticleList" element={<ArticleList />} />
            <Route path="/SubmitArticle" element={<SubmitArticle />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;