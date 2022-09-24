import React from "react";
import "../App.css";

function Lists({ people }) {
  return (
    <div className="main-section">
      {people.map((person) => {
        return (
          <div className="sub-section">
            <div>
              <img src={person.image} width="100" height="100" className="img-responsive" />
            </div>
            <div>
              {" "}
              {person.name}
              <br/>
              {person.age}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Lists;
