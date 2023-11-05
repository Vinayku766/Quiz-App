import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Quiz = ({questions}) => {
  const [quesNum, setQuestionNum] = useState(0);
  const [score, setScore] = useState(0);
  // console.log(questions)
 

  //Result 
  const Result = () => {
    const navigate = useNavigate();
    return (
      <div className="min-h-[450px] rounded-b-[7px] bg-gradient-to-r from-fuchsia-500 to-cyan-500">
      <h2 className="text-center pt-[200px] text-[25px] text-red-600">You scored {score} out of {questions.length} questions.</h2>
      <button className="text-[25px] ml-[32%] mt-[10px] text-red-600 text-center px-4 py-1 rounded-[7px] hover:bg-blue-300 transition ease-in-out delay-150" onClick={() => navigate("/")}>Play Again!</button>
      </div>
    )
  }

  //handling answer submit
  const handleClick = (e) => {
  const choosenAnswer = e;
  if(quesNum >= 0 && quesNum <= 7){
    if(choosenAnswer === questions[quesNum].answer)
    setScore(score+1);
    setQuestionNum(quesNum+1);
  } 
 }

//  console.log(score);

  return (
    <div>
    <div className="text-[2rem] text-center bg-blue-500 text-white rounded-t-[7px]">
      <h1>Quiz App</h1>
    </div>
    {(quesNum > 7)? <><Result/></>:
    <div className="mt-[40px]" key={questions[quesNum]?.id}>
     <h4 className="ml-[30px] text-[1rem] bg-green-400 text-white uppercase">Question {questions[quesNum]?.id}/8</h4>
     <h2 className="text-[21px] mt-[20px] ml-[15px]">{questions[quesNum]?.question}</h2>
      <div className="flex flex-col mt-[10px] ml-[20px]">
        <span className="mt-[20px] mr-[40%] p-2 border-green-500 border-[1px] rounded-[7px] hover:bg-green-300 cursor-pointer" onClick={(e) => handleClick(e.currentTarget.innerText)}>{questions[quesNum]?.options[0]}</span>
        <span className="mt-[10px] mr-[40%] p-2 border-green-500 border-[1px] rounded-[7px] hover:bg-green-300 cursor-pointer" onClick={(e) => handleClick(e.currentTarget.innerText)}>{questions[quesNum]?.options[1]}</span>
        <span className="mt-[10px] mr-[40%] p-2 border-green-500 border-[1px] rounded-[7px] hover:bg-green-300 cursor-pointer" onClick={(e) => handleClick(e.currentTarget.innerText)}>{questions[quesNum]?.options[2]}</span>
        <span className="mt-[10px] mr-[40%] p-2 border-green-500 border-[1px] rounded-[7px] hover:bg-green-300 cursor-pointer" onClick={(e) => handleClick(e.currentTarget.innerText)}>{questions[quesNum]?.options[3]}</span>
      </div>
     </div>}
    
    </div>
  )
}

export default Quiz