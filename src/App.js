import './App.css';
import AnalogClock from './components/AnalogClock';
import CountDownTimer from './components/CountDownTimer';
import FormComponent from './components/FormComponent';

function App() {
  return (
    <div className="App">
      <AnalogClock />
      <FormComponent/>
      <CountDownTimer/>
    </div>
  );
}

export default App;
