import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>
          나뭇잎 볼링 팀 짜기
        </h1>
        <div className='twoTeam'>
          <Team></Team>
          <Team></Team>
        </div>
      </header>
    </div>
  );
}

function Team() {
  return (
    <div>
      <h1 className='teamName'>1팀</h1>
      <div className='teamBox'>
      </div>
    </div>
  )
}

export default App;
