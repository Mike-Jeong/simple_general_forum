import React from "react";
import './SubmitForm.css';
import SubmissionForm from "../components/SubmissionForm.js";

const SubmitArticle = () => {
    return (
        <div>
            <h2>게시글 등록</h2>
            <div className='form-wrapper'>
            <SubmissionForm/>
            </div>
        </div>
    );
}

export default SubmitArticle;
