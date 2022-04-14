import React, {useState,useEffect} from "react";
import Poem from "./Poem";


function PoemsContainer() {

  const [poems, setPoems]= useState([])

  const request = async() => {
    const req= await fetch('http://localhost:8004/poems')
    const res= await req.json()
    console.log('poems', res)
    setPoems(res)
  }
 
  useEffect(()=>{
request()
  },[]
  )

  
 

  return (
    <div className="poems-container">
      <PoemsContainer />
      
    </div>
  );
  }

export default PoemsContainer;
