import React from "react";

function Card ({id, image, name, handleClick}) {
    return (
      <>
        <div id={id} onClick={() => handleClick(id)}>
          <img className="tile" src={image} alt={name} height={230} width={230}></img>
          <h1 className=" text-white name">{name}</h1>
        </div>
      </>
    )
  }

export default Card;
