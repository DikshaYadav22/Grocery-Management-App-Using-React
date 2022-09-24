import React, { useEffect, useState } from "react";
import text from "./components/data";
import "./App.css";
import { Card, Button, CardHeader, CardBody } from "reactstrap";

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
  return (
    <>
      <h3>Grocery Bud</h3>
      <form>
        <input
          type="text"
          value={inputHandler}
          onChange={(e) => setInputHandler(e.target.value)}
          placeholder="Enter a grocery item"
        />

        <Button color="success" onClick={(e) => submitHandler(e)}>
          Add Grocery
        </Button>

        <Card className="m-5">
          <CardHeader>Grocery Lists</CardHeader>
          <CardBody>
            {lists?.map((list, i) => {
              return <div key={i}>{list}</div>;
            })}
          </CardBody>
        </Card>
      </form>
    </>
  );
};
export default App;
