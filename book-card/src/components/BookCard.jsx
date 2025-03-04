import React from "react";
export default function BookCard(props){
    console.log(props);
    return(
        <div className="book-card">
            <img src={props.img} alt="" />
            <h2>{props.name}</h2>
            <p> Автор: {props.author}</p>
            <p> Шыққан жылы: {props.data}</p>

        </div>

    )
    
}