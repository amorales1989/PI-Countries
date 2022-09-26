import React from "react";

export default function Card({name, image, continent}) {
    return(
        <div>
        <h3>{name}</h3>
        <h5>{continent}</h5>
        <img src={image} alt="img not found" width="200" height="250" />
        </div>
    );
}
