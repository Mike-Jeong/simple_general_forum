import React, { useState } from "react";
import { useForm } from "react-hook-form";

function checkNumber(e) {

    e.preventDefault();
    if (e.key === '.'
        || e.key === '-'
        || e.key >= 0 && e.key <= 9) {
        return true;
    }

    return false;
}

const SubmissionForm = () => {
    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState("");
    const onSubmit = (data) => setResult(JSON.stringify(data));

    return (
        <form onSubmit={handleSubmit(onSubmit)}>


            <input className='title-input' {...register("title")} placeholder="재목" />
            <p><textarea className='text-area' {...register("article")} placeholder="내용" /></p>
            <input className='author-input' {...register("authors")} placeholder="작성자" />
            <input onkeypress= {(e) => checkNumber(e)} pattern=".{4,4}" required title="4자리 비밀번호를 입력해 주세요" {...register("password")} placeholder="비밀번호" />
            <p>{result}</p>
            <input type="submit" className='submit-button' />
        </form>
    );
}
export default SubmissionForm;
