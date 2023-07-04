import './App.css';
import React from 'react';
import LeetCode from './Components/LeetCode';
import CodeChef from './Components/CodeChef';
import CodeForces from './Components/CodeForces';
import InterviewBit from './Components/InterviewBit';
import AtCoder from './Components/AtCoder';
import SPOJ from './Components/SPOJ';
import GeeksForGeeks from './Components/GeeksForGeeks';
import CodeAbbey from './Components/CodeAbbey';
import Header from './Components/Header';

function App() {
  return(
    <div className = "App">
      <div class = "FullGrid">
        <Header></Header>
        <div class = "PlatformGrid">
          <LeetCode></LeetCode>
          <CodeChef></CodeChef>
          <CodeForces></CodeForces>
          <AtCoder></AtCoder>
        </div>
      </div>
      <div class = "FullGrid">
        <div class = "PlatformGrid">
          <InterviewBit></InterviewBit>
          <SPOJ></SPOJ>
          <GeeksForGeeks></GeeksForGeeks>
          <CodeAbbey></CodeAbbey>
        </div>
      </div>
    </div>

  );
}

export default App;
