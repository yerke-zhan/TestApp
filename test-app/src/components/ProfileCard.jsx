import React from "react";
export default function ProfileCard(props){
    const clickMe =()=>{
        alert("Button clicked!")
    }
    console.log(props);
    
    return(
        <div className="profile-card">
            <img src={props.img} alt="" />
            <h2>{props.name}</h2>
            <p>{props.bio}</p>
            <button onClick={clickMe}>Click me</button>

        </div>
    )
}