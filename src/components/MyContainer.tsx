import React, { useState } from "react";
import MyList from "./MyList";

const MyContainer: React.FC = () => {
  const [items, setItems] = useState<{ id: string; text: string; clicked: boolean }[]>([]);

  const addItem = () => {
    const newItem = {
      id: Math.random().toString(),
      text: "New item",
      clicked: false,
    };
    setItems([...items, newItem]);
  };

  const updateList = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, clicked: !item.clicked } : item
    ));
  };

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <textarea placeholder="textbox"/>
      <button onClick={addItem}>button</button>
      <MyList header="My List" items={items} updateList={updateList} />
    </div>
  );
};

export default MyContainer;
