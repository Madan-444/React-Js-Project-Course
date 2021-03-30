import React, {useState} from 'react';
import './App.css';
import List from './List'
import data from './data'

function App() {

  const [people,setPeoples] = useState(data)
  const [buttonText,setButtonText] = useState('Clear All')

  const handleButton = (e)=> {
    // e.preventDefault()
    setPeoples([])
    setButtonText('Your List is Cleared')
    
  }
  return (
    <main>
      <section className='container'>
        <h3> {people.length} birthdays todays</h3>
        <List people={people} />
        <button onClick={handleButton}> {buttonText} </button>
      </section>
    </main>

  );
}

export default App;
