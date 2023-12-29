import JobsList from './components/JobsList';
//import './App.css';
import React from 'react';

function App() {
  const [searchInput,setSearchInput] = React.useState("")

  const handleChange = (e) => {
    const inputValue  = e.target.value;
    setSearchInput(inputValue)
  }

  return (
   <div>
    <JobsList handleChange={handleChange} searchInput={searchInput}/>
   </div>
  );
}

export default App;
