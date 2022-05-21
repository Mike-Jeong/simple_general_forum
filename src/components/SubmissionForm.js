import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SubmissionForm = () => {
    const { register, handleSubmit } = useForm();

    const [result, setResult] = useState("");
    const [inputValue, setInputValue] = useState("");

    const onSubmit = (data) => setResult(JSON.stringify(data));


    const checkNum = (e) => {

        const value = e.target.value
        console.log(value);
        const newv = value.replace(/[^0-9]/g, '');
        console.log(newv);
        if (value != newv) {
            inputValue = newv;
        }
        ck();
    };

    const ck = () => {
        console.log("확인" + inputValue);
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input className='title-input' {...register("title")} placeholder="재목" />
            <p><textarea className='text-area' {...register("article")} placeholder="내용" /></p>
            <input className='author-input' {...register("authors")} placeholder="작성자" />
            <input onKeyUp={checkNum} value={inputValue} pattern=".{4,4}" required title="4자리 비밀번호를 입력해 주세요" {...register("password")} placeholder="비밀번호" />
            <p>{result}</p>
            <input type="submit" className='submit-button' />
        </form>
    );
}
export default SubmissionForm;

