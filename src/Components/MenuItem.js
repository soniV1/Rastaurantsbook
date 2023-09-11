import React from "react";

function MenuItem({image,name,price}){
    return (
        <>
        <div className="menuitem">
          <div style={{ background: `url('${image}')` }}></div>
          <h1>{name}</h1>
          <p>${price}</p>
          {/* <img src={image}/> */}

          </div>
         </>

    )
}

export default MenuItem;