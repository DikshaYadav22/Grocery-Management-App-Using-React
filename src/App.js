import React, { useEffect, useState } from "react";
import text from "./components/data";
import "./App.css";
import { Card, Button, CardHeader, CardBody } from "reactstrap";
import {FiEdit} from 'react-icons/fi';
import {AiFillDelete} from 'react-icons/ai';
import { editableInputTypes } from "@testing-library/user-event/dist/utils";

const getStorageData = () => {
  let data = JSON.parse(localStorage.getItem("items"));
  if (data) {
    return JSON.parse(localStorage.getItem("items"));
  } else {
    return [];
  }
};
const App = () => {
  const [inputHandler, setInputHandler] = useState("");
  const [lists, setLists] = useState(() => getStorageData());

  const submitHandler = (e) => {
    e.preventDefault();
    setLists([...lists, inputHandler]);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(lists));
  }, [lists]);

  function inputChange(e){

    setInputHandler(e.target.value);
    
    }

  const deleteList = (i) => 
  { 
    const filteredItem = lists.filter((list, index)=>
    {
      return index !== i;
    });

    setLists(filteredItem);
    
  }
  return (
    <>
      <h3>Grocery Bud</h3>
      <form>
        <input
          type="text"
          value={inputHandler}
          onChange={inputChange}
          placeholder="Enter a grocery item"
        />

        <Button color="success" onClick={(e) => submitHandler(e)}>
          Add Grocery
        </Button>

        <Card className="m-5">
          <CardHeader>Grocery Lists</CardHeader>
          <CardBody>
            {lists?.map((list, i) => {
              return <div key={i}>
                {list}
              <Button><FiEdit /></Button>
              <Button onClick={()=>deleteList(i)}><AiFillDelete /></Button>
              </div>;
            })}
          </CardBody>
        </Card>
      </form>
    </>
  );
};
export default App;
