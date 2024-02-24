import React, { useEffect, useState } from 'react';
import './App.css';
import Advice from './components/Advice.jsx';
import Dice from './components/Dice.jsx';
import Divider from './components/Divider.jsx';

var API_URL = "https://api.adviceslip.com/advice";


function App() {
  const [adviceId, setAdviceId] = useState();
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = async() => {
    try{
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
        if(data.slip.id == adviceId){
          fetchAdvice();
        }else{
          setAdviceId(data.slip.id)
          setAdvice(data.slip.advice);
        }
    }catch(err){
        console.log("Fetching error: " + err);
    }
  }
  

  return (
    <>
      <div className="_content_">
        <div className="card">
          <Advice adviceId = {adviceId} advice={advice}/>
          <Divider />
          <Dice fetchAdvice={fetchAdvice}/>
        </div>  
      </div>
    </>
  );
}

export default App
