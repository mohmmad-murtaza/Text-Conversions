
import './App.css';
import { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const convertToUpperCase = () => {
    setOutputText(inputText.toUpperCase());
  };
  const convertToLowerCase = () => {
    setOutputText(inputText.toLowerCase());
  };
  const capitalizeText = () => {
    setOutputText(
      inputText
        .toLowerCase()
        .replace(/\b\w/g, (char) => char.toUpperCase())
    );
  };
  const resetFields = () => {
    setInputText('');
    setOutputText('');
  };
  return (
    <div className="App">
      <h1>Text Conversion Tool</h1>
      <div className="container">
        <div className="input-section">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button onClick={convertToUpperCase}>Uppercase</button>
          <button onClick={convertToLowerCase}>Lowercase</button>
          <button onClick={capitalizeText}>Capitalize</button>
        </div>
        <div className="output-section">
          <h3>Converted Text:</h3>
          <div className="output-display">{outputText}</div>
        </div>
        <div className="reset-section">
          <button onClick={resetFields}>Reset</button>
        </div>
      </div>
    </div>
  );
}
export default App;
