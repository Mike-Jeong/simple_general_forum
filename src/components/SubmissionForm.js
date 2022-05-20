import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SubmissionForm = () => {
    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState("");
    const onSubmit = (data) => setResult(JSON.stringify(data));

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <input {...register("title")} className="title-input" type='text' placeholder='제목' />
            <textarea {...register("text")} className="text-area" placeholder='내용'></textarea>

            <p>{result}</p>
            <input className="submit-button" type="submit">게시글 등록하기</input>
        </form>
    );
}
export default SubmissionForm;
