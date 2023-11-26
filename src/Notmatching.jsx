import React from "react";

const Notmatching = (Props) =>{
   
    let {x,y,z} = Props
    return (
        <>
         <h1>{x} {y} {z}</h1>
         <h2> Not Maching </h2>
        </>
      )
}     

export default Notmatching;