import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './components/Start';
import Question from './components/Questions';
import Result from './components/Result';
import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [num, setNum] = useState(1);
  const [score, setScore] = useState({
    EI: 0,
    SN: 0,
    TF: 0,
    PJ: 0,
  });

  const nextStep = () => {
    if (num < 12) {
      setNum(num + 1);
    } else {
      navigate('/result');
    }
  };

  const updateScore = (type, value) => {
    setScore({
      ...score,
      [type]: score[type] + value,
    });
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Start setStep={() => setNum(1)} />} />
          <Route
            path="/question"
            element={
              <Question
                num={num}
                nextStep={nextStep}
                updateScore={updateScore}
              />
            }
          />
          <Route path="/result" element={<Result score={score} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
