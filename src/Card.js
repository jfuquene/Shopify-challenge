import React from "react";


export default function Card({image}){


    return(
        
            <div className="card">
                    <img className="card--image" 
                          src={image.url} alt="picture from NASA api"/>
                   <div className="card--content">
                    <h3 className="card--title">{image.title}</h3>
                    <p><small>Author: {image.copyright}</small></p>
                    <p><small>Release Date: {image.date}</small></p>
                    <p className="card--desc">{image.explanation}</p>
                </div>
            </div>     
    )



}