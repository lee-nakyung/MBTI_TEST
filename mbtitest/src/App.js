import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import Start from './components/Start';
import Question from './components/Questions';
import Result from './components/Result';
import './App.css';

function App() {
  const [num, setNum] = useState(1); //현재 질문 번호를 저장하는 변수. 초기값은 1
  const [score, setScore] = useState({
    EI: 0,
    SN: 0,
    TF: 0,
    PJ: 0,
  }); //각 MBTI  점수를 저장하는 변수. 초기값은 0

  const updateScore = (type, value) => {
    setScore({
      ...score,
      [type]: score[type] + value,
    });
  };

  //   type:업데이트할 MBTI 지표(EI,SN,TF,PJ)
  // value:추가할 점수 값
  // setScore :새로운 점수를 반영한 score 객체로 상태를 갱신.

  const resetState = () => {
    setNum(1);
    setScore({
      EI: 0,
      SN: 0,
      TF: 0,
      PJ: 0,
    });
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start setNum={setNum} />} />
        <Route
          path="/question"
          element={
            <Question num={num} updateScore={updateScore} setNum={setNum} />
          }
        />
        <Route
          path="/result"
          element={<Result score={score} resetState={resetState} />}
        />
      </Routes>
    </div>
  );
}

export default App;
