import { useState, useEffect } from 'react'
import Quizzy from './questions/quizzy.tsx'
import './questions/App.css'

function App() {
  const [cont, setCont] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(Quizzy());
  const [quest, setQuest] = useState(currentQuestion.quest);
  const [options, setOptions] = useState(currentQuestion.options);

  useEffect(() => {
    document.addEventListener('keydown', detectKey, true);
    return () => {
      document.removeEventListener('keydown', detectKey, true);
    };
  }, [currentQuestion]);

  const detectKey = (e: KeyboardEvent) => {
    console.log(e.key);
    console.log(currentQuestion.rightAnswer);
    if (e.key === currentQuestion.rightAnswer[0] || e.key === currentQuestion.rightAnswer[1]) {
      const element = document.getElementById(currentQuestion.rightAnswer[0]);
      if (element) {
        element.style.backgroundColor = 'green';
      }
      if (e.key === currentQuestion.rightAnswer[1]) {
        setQuest('O jogador 2 acertou!');
      }
      if (e.key === currentQuestion.rightAnswer[0]) {
        setQuest('O jogador 1 acertou!');
      }
      setCont(prevCont => prevCont + 1);
      setTimeout(() => {
        if (element) {
          element.style.backgroundColor = '';
        }
        const newQuestion = Quizzy(cont + 1);
        setCurrentQuestion(newQuestion);
        setQuest(newQuestion.quest);
        setOptions(newQuestion.options);
      }, 3000);
    }
  };

  return (
    <section>
      <h2>{quest}</h2>
      <section className='optionsCont'>
        <h2 className='options' id='a'>{options[0]}</h2>
        <h2 className='options' id='b'>{options[1]}</h2>
        <h2 className='options' id='c'>{options[2]}</h2>
      </section>
    </section>
  );
}

export default App;
