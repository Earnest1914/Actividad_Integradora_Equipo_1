import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header className="App-header">
        <p className="App">
        <img src={`${process.env.PUBLIC_URL}Ultimas_Fichas.png`} />
        </p>
        <p className="App">
        <img src={`${process.env.PUBLIC_URL}burndown_chart.png`} />
        </p>
        <p className="App">
        <img src={`${process.env.PUBLIC_URL}control_chart.png`} />
        </p>
        <p className="App">
        <img src={`${process.env.PUBLIC_URL}cumnulative_flow.png`} />
        </p>
      </header>
    </div>
  );
}

export default App;
