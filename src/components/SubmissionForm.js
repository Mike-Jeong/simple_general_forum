import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const SubmissionForm = () => {
    const { register, handleSubmit, erros } = useForm();

    const [result, setResult] = useState("");
    const [inputValue, setInputValue] = useState("");

    const onSubmit = (data) => setResult(JSON.stringify(data));

    const onError = (error) => { alert('4자리 비밀번호를 입력해 주세요.') };

    const checkNum = (e) => {
        const value = e.target.value
        console.log(value);
        const newv = value.replace(/[^0-9]/g, '');
        console.log(newv);

        if (newv.length > 4) {
            const newvover = newv.substring(0, 4);
            console.log("sss" + newvover);
            setInputValue(newvover);
        } else {
            setInputValue(newv);
        }
    };


    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <input className='title-input' {...register("title")} placeholder="재목" />
            <p><textarea className='text-area' {...register("article")} placeholder="내용" /></p>
            <input className='author-input' {...register("authors")} placeholder="작성자" />
            <input value={inputValue} {...register("password", { minLength: 4, onChange: (e) => { checkNum(e) } })} placeholder="비밀번호" />
            <input type="submit" className='submit-button' value={"제출"} />
        </form>

    );
}
export default SubmissionForm;

