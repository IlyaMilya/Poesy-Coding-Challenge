import React from "react";
import PoemsContainer from "./PoemsContainer";

function Poem(poems){
  PoemsContainer.map((element) => {
  return (
    <div>
      <h3>{element.title}</h3>
      <p>{element.content}</p>
      <p>
        <strong>{element.author}</strong>
      </p>
      <button>Mark as read</button>
    </div>
  );
  })
}

export default Poem;
