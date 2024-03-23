import { useState } from "react";
import Button from "./Button";
import Name from "./Name";
import Header from "./Header";
import List from "./List";
function App() {
  const handleClick = () => {
    console.log("Button Click");
  };
  const items = ["Apple", "Banna", "Orange"];
  return (
    <div>
      <Header title="This is a PW Skills Assignment" />
      <Name name="akash" age="30" />
      <Button onClick={handleClick} text={"click me"} />
      <List items={items} />
    </div>
  );
}

export default App;
