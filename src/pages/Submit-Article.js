import React from "react";
import './SubmitForm.css'

const SubmitArticle = () => {
    return (
        <div>
            <h2>게시글 등록</h2>
            <div className='form-wrapper'>
                <input className="title-input" type='text' placeholder='제목' />
                <textarea className="text-area" placeholder='내용'></textarea>
            </div>
            <button className="submit-button">입력</button>
        </div>
    );
}

export default SubmitArticle;
