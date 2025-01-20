import React, { useState } from 'react';
import MyList from './MyList';

type Item = {
  id: string;
  text: string;
  clicked: boolean;
};

const MyContainer: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    const newItem: Item = {
      id: Date.now().toString(),
      text: inputValue,
      clicked: false,
    };
    setItems([...items, newItem]);
    setInputValue('');
  };

  const toggleItemClick = (id: string) => {
    setItems(items.map(item => item.id === id ? { ...item, clicked: !item.clicked } : item));
  };

  return (
    <div>
      <h1>Hello, World!</h1>
      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter item text"
      />
      <button onClick={addItem}>Add Item</button>
      <MyList header="My List" items={items} toggleItemClick={toggleItemClick} />
    </div>
  );
};

export default MyContainer;