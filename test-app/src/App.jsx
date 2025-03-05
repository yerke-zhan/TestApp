

import React from "react";
import "./App.css";
import Header from './components/Header'
import ProfileCard from "./components/ProfileCard";
import suret from './assets/yerke.jpg'
function App(){
    const submitForm = (e)=>{
        e.preventDefault()
        alert("Form submitted!")
    }
    const handleChange = (e) =>{
        console.log(e.target.value);
    }
    const handleChange2 = (e) =>{
        console.log(e.key);
    }


    const upperCase = (e) =>{
        console.log(e.target.value.toUpperCase());
        
        }
     const submitEvent = (e) =>{
        if(e.key ==="Enter"){
        alert(`Submitted:"${e.target.value}"`);
        e.target.value ="";

    }
   
    }
    let san =0
    const Minus =()=>{

        console.log(san--);
        
    }
    const Plus =()=>{

        console.log(san++);
    }
    const Reset =()=>{

        console.log(san=0);
    }
    let colors = ["green", "blue", "black", "yellow"]
    
    const ChangeColor =()=>{
        let random = Math.floor(Math.random() * colors.length);
        document.querySelector('.container').style.backgroundColor=colors[random];
       

    }

    return(
<>
<Header title = "Lorem Ipsun" text = "Random text"/>
<Header title = "Yerkezhan" text = "Developer"/>
<hr />
<Header title = "Speaking Club" text = "Login" Yerke = "Sign up"/>
<ProfileCard 
img={suret}
name ="Mambar Yerkezhan"
bio ="FullStack Developer"
/>

<section> 
<form onSubmit= {submitForm}>

    <input type="text" placeholder="onChange" onChange={handleChange} />

    <input type="text" placeholder="onKeyDown" onKeyDown={handleChange2} />

    <button type="submit"> Submit</button>
</form>

<div> 
<button onClick={Plus}>+</button>
<button onClick={Minus}>-</button>
<button onClick={Reset}>Reset</button>
</div>

<div className="container" style={{backgroundColor:"red"}} onClick={ChangeColor}>Түс өзгереді</div>


<h1>Home Work №3</h1>
onChange (toUpperCase), onKeyDown(Enter=Submit)
<input type="text" placeholder="Click Enter" onChange={upperCase} onKeyDown={submitEvent}/>
</section>
    



</>
    )
}
    


export default App
