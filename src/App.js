import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.css';

import Home from "./pages/Home";
import ArticleList from "./pages/ArticleList";
import SubmitArticle from "./pages/Submit-Article"; 
import NotFoundPage from "./pages/404";

function App() {
    return ( 
        <Router>
        <div>
          <h1>민식이의 익명 게시판 프로젝트(프로젝트 명 미정...)</h1>
            <ul className="header">
                <li><a href = "/">메인 화면</a></li>
                <li><a href = "/ArticleList">게시판 목록</a></li>
                <li><a href = "/SubmitArticle">게시판 등록</a></li>
            </ul>
          <div className="content">
            
          </div>
        </div>
        </Router>
    );
}


export default App;