

import React from "react";
import "./App.css";
import Header from './components/Header'
import ProfileCard from "./components/ProfileCard";
import suret from './assets/yerke.jpg'
function App(){
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

My first web app!

</>
    )
}
    


export default App
