import { useState } from "react";
import {useNavigate,createSearchParams} from "react-router-dom";

export const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const navigate=useNavigate();
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  let quiz = [
    {
      q: "https://en.testometrika.com/upload/questions/9a3/9a3e5c664c57fefe9781ed343a0b4224.svg",
      ans: "https://en.testometrika.com/upload/answers/af1/af154b81388bbe80d95a6c2d958090d3.svg",
      options: [
        "https://en.testometrika.com/upload/answers/2ad/2ad96527ff3bdffc254b05985d90e670.svg",
        "https://en.testometrika.com/upload/answers/743/743c194ea591850121774bbcea728cb7.svg",
        "https://en.testometrika.com/upload/answers/3f4/3f48e60b405fe3a20ae80b4c1effe5be.svg",
        "https://en.testometrika.com/upload/answers/af1/af154b81388bbe80d95a6c2d958090d3.svg",
        "https://en.testometrika.com/upload/answers/282/2829b67f1ddb1c64a70b4ac754fc03c9.svg",
        "https://en.testometrika.com/upload/answers/d63/d635d6a11058a01b5b6760b6638342fa.svg",
      ],
    },
    {
      q: "https://en.testometrika.com/upload/questions/61f/61f8311dc95818b190b639bb10e7ff0a.svg",
      ans: "https://en.testometrika.com/upload/answers/c4d/c4d606c7c886fc53ecee625417464a02.svg",
      options: [
        "https://en.testometrika.com/upload/answers/9a3/9a3eb223416f61ff5b9177914b70bd60.svg",
        "https://en.testometrika.com/upload/answers/c4d/c4d606c7c886fc53ecee625417464a02.svg",
        "https://en.testometrika.com/upload/answers/b78/b7854d51e6fc99a7051b4eafe549ccdd.svg",
        "https://en.testometrika.com/upload/answers/b9d/b9db4988f489cc0410930f09bb287963.svg",
        "https://en.testometrika.com/upload/answers/174/174cc63476713040f570f0ffabf5d5a4.svg",
        "https://en.testometrika.com/upload/answers/75b/75b18f06da1aeff34f41634dcb126b57.svg",
      ],
    },
    {
      q: "https://en.testometrika.com/upload/questions/56e/56e7575fce5c66102f68965309041c81.svg",
      ans: "https://en.testometrika.com/upload/answers/52e/52e67d35e0f5d7ac65d639f7d74737b1.svg",
      options: [
        "https://en.testometrika.com/upload/answers/7f1/7f11134a286731f010982d5d79e8cd26.svg",
        "https://en.testometrika.com/upload/answers/e3c/e3c50d49dd3e826c711e33eed9e6b9cb.svg",
        "https://en.testometrika.com/upload/answers/370/370cd583ba4fe1ed516fa59e729ddf69.svg",
        "https://en.testometrika.com/upload/answers/078/078f9d02c28538a24e685aa90ef651e3.svg",
        "https://en.testometrika.com/upload/answers/52e/52e67d35e0f5d7ac65d639f7d74737b1.svg",
        "https://en.testometrika.com/upload/answers/110/1108829aabfbc040dee01c20198f57be.svg",
      ],
    },
    {
      q: "https://en.testometrika.com/upload/questions/857/85779e2ee0f5a8c6874284c8dc7f040a.svg",
      ans: "https://en.testometrika.com/upload/answers/81f/81ffd37c5b0c47314c5c35d90cc410f3.svg",
      options: [
        "https://en.testometrika.com/upload/answers/833/8333eeab5e38a9e4cb24412453f29f7b.svg",
        "https://en.testometrika.com/upload/answers/292/29281ad823bd13e1f99a39e04685e6ed.svg",
        "https://en.testometrika.com/upload/answers/5ef/5ef20f3121c4d9e38517522535eb298c.svg",
        "https://en.testometrika.com/upload/answers/376/3763c71fffa9648c4aa1f1c53aa06bce.svg",
        "https://en.testometrika.com/upload/answers/fe5/fe52d92ce882e1571d445b0951b2d887.svg",
        "https://en.testometrika.com/upload/answers/81f/81ffd37c5b0c47314c5c35d90cc410f3.svg",
      ],
    },
    {
      q: "https://en.testometrika.com/upload/questions/86c/86c577fabc67aed0dbd84df222f0685a.svg",
      ans: "https://en.testometrika.com/upload/answers/7df/7dfcfdb549c39a7d6c3cde429291bd03.svg",
      options: [
        "https://en.testometrika.com/upload/answers/2f5/2f5bb5003870c7d81339a60fc9ee0abf.svg",
        "https://en.testometrika.com/upload/answers/405/405fc59bd9ca9b483046be0f5641c585.svg",
        "https://en.testometrika.com/upload/answers/4e2/4e23e2df71d493fccae53c20760642c0.svg",
        "https://en.testometrika.com/upload/answers/7df/7dfcfdb549c39a7d6c3cde429291bd03.svg",
        "https://en.testometrika.com/upload/answers/4f9/4f98b73c7fa56a9753c4f3d68b697fe1.svg",
        "https://en.testometrika.com/upload/answers/468/468e4cededf71527edda5d3253dd5a9b.svg",
      ],
    },
  ];

  const { q, options, ans } = quiz[activeQuestion];

  const onClickNext = () => {
    console.log("onClickNext", quiz.length - 1, activeQuestion);
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 1,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== quiz.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === ans) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const onClickFinish=()=>{
    console.log(result)
    navigate("/result",{state:{correctAnswers:result.correctAnswers,score:result.score,totalQuestions:quiz.length}})
  }

  return (
    <>
      <div className="q-container">
        <h1>Quiz</h1>
        <img src={q} alt="img" className="q-img"/>
        <ul className="options">
          {options.map((answer, index) => (
            <img
              onClick={() => onAnswerSelected(answer, index)}
              key={answer}
              className={
                selectedAnswerIndex === index ? "selected-answer" : null
              }
              src={answer}
              alt="img"
            />
          ))}
        </ul>
        {activeQuestion === quiz.length - 1 ? (
          <button onClick={onClickFinish} disabled={selectedAnswerIndex === null}>
            {" "}
            Finish
          </button>
        ) : (
          <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
            Next
          </button>
        )}
      </div>
    </>
  );
};
