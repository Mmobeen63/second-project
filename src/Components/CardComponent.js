import React from "react";
import path from "../Assets/Path.png"

export const CardComponent=(props)=>{
    const styles={
        color: "grey",
        "letter-spacing":0.5,
        'font-size':"12px",
        "text-decoration": 'underline'
    }
    return(
        <div className="CardStyle">
            <div className="imageStyle">
                <img id="placeImage" src={props.image} />
            <div className="cardContent">
                <div className="location">
                    <img id="marker" src={path} ></img>
                    &nbsp;&nbsp;&nbsp;
                    <span>{props.country}&nbsp;</span>
                    <span style={styles}>View On Google</span>
                </div>
                <div>
                    <h1>{props.place}</h1>
                </div>
                <div className="dateClass">
                    <h4>{props.dateOfVisit}</h4>
                </div>
                <div className="description">
                    <p>{props.description}</p>
                    
                </div>
            
            </div>
            </div>
            <hr></hr>
        </div>
    )
}