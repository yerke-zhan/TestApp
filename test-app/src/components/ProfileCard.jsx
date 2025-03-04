import React from "react";
import "./ProfileCard.css";


const ProfileCard = () =>{
    return(
        <div className = "profile-card">
            <h2 className="name">Yerkezhan</h2>
            <p className="profession"> Frontend developer</p>
            <p className="city">Almaty</p>
        </div>

    );
};

export default ProfileCard;