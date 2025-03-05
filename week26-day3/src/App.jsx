import React from "react";
import "./App.css";

function App(){
    
    const upperCase = (e) =>{
        console.log(e.target.value.toUpperCase());
        
        }
     const submitEvent = (e) =>{
        if(e.key ==="Enter"){
        alert(`Submitted:"${e.target.value}"`);
        e.target.value ="";

    }
   
    }
    

    return(
<>


<section> 

<h1>Home Work №3</h1>
onChange (toUpperCase), onKeyDown(Enter=Submit)
<input type="text" placeholder="Click Enter" onChange={upperCase} onKeyDown={submitEvent}/>
</section>
    



</>
    )
}
    


export default App
