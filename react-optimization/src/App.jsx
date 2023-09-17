import React, { useCallback, useMemo, useState } from "react";
import Button from "./components/UI/Button";
import List from "./components/List";
import "./App.css";

function App() {
  const [title, setTitle] = useState("Title");
  console.log("app çalıştı");

  const changeTitleHandler = useCallback(() => {
    setTitle("Title Updated");
  }, []);

  const listItems = useMemo(() => [1, 2, 3, 4, 5], [])

  return (
    <div className="container">
      <h1>{title}</h1>
      <Button onClick={changeTitleHandler}>Başlığı Değiştir</Button>
      <List items={listItems} />
    </div>
  );
}

export default App;
