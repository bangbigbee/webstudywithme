import './App.css';
import MyForm from './components/MyForm';
import AnalogClock from './components/AnalogClock';
import CountDownTimer from './components/CountDownTimer';

function App() {
  return (
    <div className="App">


      <p>
        {/* <MyForm /> */}
        <AnalogClock />
        <CountDownTimer />
      </p>


    </div>
  );
}

export default App;
