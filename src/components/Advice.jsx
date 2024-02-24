import React from "react";
function Advice({ adviceId, advice }){

    return (
        <>
            <h1 className="title gap">ADVICE #{adviceId}</h1>
            <p className="content gap">“{advice}”</p>
        </>
    );
}

export default Advice;