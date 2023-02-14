import './App.css';
import AnalogClock from './components/AnalogClock';
import CountDownTimer from './components/CountDownTimer';
import DigitalClock from './components/DigitalClock';
import FormComponent from './components/FormComponent';

function App() {
  return (
    <div className="App">
    <div>
      <AnalogClock />
    </div>  
      {/* <FormComponent/> */}
    <div>
      <CountDownTimer/>
    </div>  
    <div className="digital-clock">
      <DigitalClock/>
    </div>
      
    </div>
  );
}

export default App;
