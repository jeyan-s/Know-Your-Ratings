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
  const UserNames = ["jeyan_s", "smartie_jack", "jeyan_s", "Jack_01", "Jeyan_Nino", "sasireka_13", "jeyannino001", "jeyannino001"]
  return(
    <div className = "App">
      <div class = "FullGrid">
        <Header></Header>
        <div class = "PlatformGrid">
          <LeetCode username = {UserNames[0]}></LeetCode>
          <CodeChef username = {UserNames[1]}></CodeChef>
          <CodeForces username = {UserNames[2]}></CodeForces>
          <AtCoder username = {UserNames[3]}></AtCoder>
        </div>
      </div>
      <div class = "FullGrid">
        <div class = "PlatformGrid">
          <InterviewBit username = {UserNames[4]}></InterviewBit>
          <SPOJ username = {UserNames[5]}></SPOJ>
          <GeeksForGeeks username = {UserNames[6]}></GeeksForGeeks>
          <CodeAbbey username = {UserNames[7]}></CodeAbbey>
        </div>
      </div>
    </div>

  );
}

export default App;
