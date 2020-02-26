import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import './App.css';

function App() {
  const [binary, setBinary] = useState('01100110');
  const [isInputValid, setIsInputValid] = useState(true);
  const [decimal, setDecimal] = useState('');

  const handleBinaryChange = ({ target: { value } }) => {
    const replacedValue = value.replace(/([^0-1])/, '');
    setBinary(replacedValue);

    setIsInputValid(replacedValue === value);
  };

  useEffect(() => setDecimal(parseInt(binary === '' ? '0' : binary, 2)), [binary]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bin2Dec</h1>
      </header>
      <div className="App-form">
        <div className="form-input">
          <label htmlFor="binary">Binary</label>
          <input
            id="binary"
            name="binary"
            placegolder="Binary number"
            maxLength={8}
            onChange={handleBinaryChange}
            value={binary}
          />

          <p className={classnames('warning', { visible: !isInputValid })}>Invalid character for binary</p>
        </div>

        <span className="equals">=</span>

        <div className="form-input">
          <label htmlFor="decimal">Decimal</label>
          <input id="decimal" name="decimal" readOnly value={decimal} />
        </div>
      </div>
    </div>
  );
}

export default App;
