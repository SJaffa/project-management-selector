import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { results } from  './Results'
import { questions } from  './Questions'

function App() {

  const [currentQuesIndex, setCurrentQuesIndex] = useState();
  const currentQues = {
    "questionText": "Welcome to PM4YOU",
    "answerOptions": [
    ]
  }

  function handleNextButtonClick() {
    // setCurrentQuesIndex((currentQuesIndex + 1) % labels.length);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Project Management Helper</h1>
        <img src={logo} className="App-logo" alt="logo" />
        {/* <button className="button" onClick={handleNextButtonClick}> */}
        <label>What is the size of your team?</label>
        <select name="" id="" className="padding-1">
          <option value="one">1 person</option>
          <option value="2-4">2-4 people</option>
          <option value="2-4">5-10 people</option>
          <option value="5-10">11-50 people</option>
          <option value="11-50">50+</option>
        </select>
        <button className="button" onClick={handleNextButtonClick}>
          Next
        </button>
      </header>
    </div>
  );
}

export default App;
