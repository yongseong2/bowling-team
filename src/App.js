import React, { useState } from 'react';
import './App.css';
import { sample } from 'lodash';
import bowling from './img.gif'

function App() {
  const [inputTeamCount, setInputTeamCount] = useState(1);
  const [teams, setTeams] = useState([]);
  const [firstTeam, setFirstTeam] = useState([])
  const [secondTeam, setSecondTeam] = useState([])
  const [show, setShow] = useState(false)

  const handleAddTeam = () => {
    setInputTeamCount(prevCount => prevCount + 1);
  };

  const handleMinusTeam = () => {
    setInputTeamCount(prevCount => {
      if (prevCount === 0) {
        return prevCount
      }
      return prevCount - 1
    });
  };
  

  const handleInputChange = (index, inputIndex, value) => {
    const updatedTeams = [...teams];
    if (!updatedTeams[index]) {
      updatedTeams[index] = ['', ''];
    }
    updatedTeams[index][inputIndex] = value;
    setTeams(updatedTeams);
  };

  const handleTeamCreation = () => {
    // console.log(teams)
    const copyFirstTeam = [...firstTeam]
    const copySecondTeam = [...secondTeam];

    teams.forEach((team) => {
      const firstTeamMember = sample(team)
      copyFirstTeam.push(firstTeamMember)

      const remainingMembers = team.filter(member => member !== firstTeamMember);
      copySecondTeam.push(remainingMembers);
    })
    setFirstTeam(copyFirstTeam)
    setSecondTeam(copySecondTeam)
    setShow(true)
  }

  const handleTwoTeam = () => {
    setFirstTeam([])
    setSecondTeam([])
    setShow(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>
          나뭇잎 볼링 팀 짜기
        </h1>
        <img className='bowling' src={bowling} alt="bowl" width="100px"/>
        <div className='twoTeam'>
          <div>
            {
              show ? <><h1 className='teamName'>1팀</h1></> : null
            }
            <div className='teamBox'>
              <div className='teamMember'>
                {firstTeam.map((member, idx) => {
                  return (
                    <p key={idx}>{member}</p>
                  )
                })}
              </div>
            </div>
          </div>
          <div>
            {
              show ? <><h1 className='teamName'>2팀</h1></> : null
            }
            <div className='teamBox'>
              <div className='teamMember'>
                {secondTeam.map((member, idx) => {
                  return (
                    <p key={idx}>{member}</p>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        {[...Array(inputTeamCount)].map((_, index) => (
          <InputTeam
            key={index}
            index={index}
            onInputChange={handleInputChange}
          ></InputTeam>
        ))}
        {
          show === false ? (
            <>
              <div>
                <button className='btnBoxRangeMinus' onClick={handleMinusTeam}>-</button>
                <button className='btnBoxRangePlus' onClick={handleAddTeam}>+</button>
              </div>
              <button className='btnBox' onClick={handleTeamCreation}>팀짜기</button>
            </>
          ) : <button className='btnBox' onClick={handleTwoTeam} >다시하기</button>
        }

      </header>
    </div>
  );
}

function InputTeam(props) {
  const handleInputChange = (event, inputIndex) => {
    const value = event.target.value;
    props.onInputChange(props.index, inputIndex, value);
  };

  return (
    <div>
      <p className='tearClass'>{props.index + 1}티어</p>
      <div className='inputBox'>
        <input className='inputTag' type="text" onChange={(e) => handleInputChange(e, 0)} />
        <input className='inputTag' type="text" onChange={(e) => handleInputChange(e, 1)} />
      </div>
    </div>
  )
}


export default App;
