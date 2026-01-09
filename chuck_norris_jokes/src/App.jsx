
import { useEffect, useState } from 'react'; 
import './App.css' 

// usestate for joke, set joke 

// separate use effect and call getdata inside it? 
function App() { 
  useEffect(()=> { 
    try { 
      const getData = async function () { 
        const response = await fetch("https://api.chucknorris.io/jokes/random"); 
        const data = await response.json(); 
        // console.log(data); 
        selectJoke(data.value);
      }; 
    } catch (error) { 
      console.error("Error fetching joke:", error); 
      console.log("An error occurred while fetching the joke. Please try again later."); 
    } 
  },[]) 

  // make new component for seleteJoke or leave out?
  const selectJoke = (value) => { 
    console.log(value); 
    jokeHere.innerText = value; 
  }; 
  
    // convert event listener (getData onClick in button 
  button.addEventListener("click", function () { 
    console.log("button pressed"); 
    getData(); 
  }); 
  
  // add hooks in here for joke state and button click event
  return ( 
  <div class="joke-container"> 
  <h2>Joke Under Here</h2> 
  <button id="joke-button">Click for a Joke!</button> 
  <p>api credit here</p> </div> ) 
  } 
  
  export default App;