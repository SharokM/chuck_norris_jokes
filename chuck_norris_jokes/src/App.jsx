
import { useEffect, useState } from 'react'; 
import './App.css' 


// separate use effect and call getdata inside it? 
function App() { 
  const [joke, setJoke] = useState("");


  const getData = async function () {   
  try { 
        const response = await fetch("https://api.chucknorris.io/jokes/random"); 
        const data = await response.json(); 
        // console.log(data); 
        setJoke(data.value);
      } catch (error) { 
      console.error("Error fetching joke:", error); 
      console.log("An error occurred while fetching the joke. Please try again later."); 
    }}
  

  // handle getData side effect run
  useEffect(() => {
    getData();
  },[])


  return ( 
  <div>
    <h1>Chuck Norris Jokes</h1> 

    <div className="joke-container"> 
      <button onClick={getData}>Click for a Joke!</button> 
      <p>{joke || "loading.... loading.."}</p> 
    </div> 
  </div>
  )}
  
export default App;