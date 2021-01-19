import React from 'react';
import './app.css';
import Habit from './components/habit';

function App() {
  const name = 'ellie'
  const names = undefined;
  return <Habit></Habit>;
  return (
    <>
      <h1>Bye! {name}:</h1>  
      <h1>Hello!</h1>
      {names && <h1>Hello!{name}:</h1>}
      // <React.Fragment>
      // <h1>Bye! {name}:</h1>  
      // <h1>Hello!</h1>
      // </React.Fragment>
    
      // jsp안에서 javascript작성 가능
      {
        ['heart','apple'].map(item => (
          <h1>[item]</h1>
          ))
        }
    </>
  );
}

export default App;
