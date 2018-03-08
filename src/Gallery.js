import React from "react";

const Gallery = props => {

    return (
        <div>
            <h1>{props.title}</h1>
            <img src={props.source} />
            <p>{props.caption}</p>
        </div>
    )
};

export default Gallery;
