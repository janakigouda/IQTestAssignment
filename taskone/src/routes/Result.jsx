import {useLocation} from "react-router-dom";

export const Result=()=>{
    const result=useLocation();

    return(
        <>
            <h3>Your result:</h3>
            <p>
                <p className="res">Your IQ is {(result.state.correctAnswers)*10}.</p>
                <p>This corrosponds to a below average level IQ. In this test you have</p>
                <p className="res"> {result.state.correctAnswers} correct answers from {result.state.totalQuestions}</p>
            </p>
        </>
    )
}