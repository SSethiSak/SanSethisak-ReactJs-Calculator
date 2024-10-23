import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import useLocalStorageState from './hooks/useLocalStorage';

function App() {
   const [value, setValue] = useState('')
   const [todoList, setTodoList] = useLocalStorageState("listItem");
   const handleBtnClick = (e) => {
    setValue(value + e.target.value);
   }

   const handleEqual = (e) => {
    const result = eval(value)
    setValue(eval(result))
    setTodoList([...todoList, `${value} = ${result}`])
   }

   const handleAC = (e) => {
    setValue('')
   }

   const handleDE = (e) => {
   
    setValue(value.slice(0, -1));
   }

   const handleDeleteHistory = () => {
    localStorage.clear()
    setTodoList([]);
    setValue('');
   }

  return (
    <div className='container'>
      <div className='calculator'>
        <form action=''>
          <div className='display'>
            <input type='text' value={value}></input>
          </div>
          <div>
            <input type='button' value="AC" onClick={handleAC}></input>
            <input type='button' value="DE" onClick={handleDE}></input>
            <input type='button' value="." onClick={handleBtnClick}></input>
            <input type='button' value="/" onClick={handleBtnClick}></input>
          </div>
          <div>
            <input type='button' value="7" onClick={handleBtnClick}></input>
            <input type='button' value="8" onClick={handleBtnClick}></input>
            <input type='button' value="9" onClick={handleBtnClick}></input>
            <input type='button' value="*" onClick={handleBtnClick}></input>
          </div>
          <div>
            <input type='button' value="4" onClick={handleBtnClick}></input>
            <input type='button' value="5" onClick={handleBtnClick}></input>
            <input type='button' value="6" onClick={handleBtnClick}></input>
            <input type='button' value="+" onClick={handleBtnClick}></input>
          </div>
          <div>
            <input type='button' value="1" onClick={handleBtnClick}></input>
            <input type='button' value="2" onClick={handleBtnClick}></input>
            <input type='button' value="3" onClick={handleBtnClick}></input>
            <input type='button' value="-" onClick={handleBtnClick}></input>
          </div>
          <div>
            <input type='button' value="00" onClick={handleBtnClick}></input>
            <input type='button' value="0" onClick={handleBtnClick}></input>
            <input type='button' value="=" className='equal' onClick={handleEqual}></input>
          </div>
        </form>
      </div>
      <div className="history">
        <h3>Calculation History</h3>
        <button onClick={handleDeleteHistory}>Delete History</button>
        <ul>
          {todoList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
