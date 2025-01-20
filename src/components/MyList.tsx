import React from 'react';

type Item = {
  id: string;
  text: string;
  clicked: boolean;
};

interface ListProps {
  header: string;
  items: Item[];
  toggleItemClick: (id: string) => void;
}

const MyList: React.FC<ListProps> = ({ header, items, toggleItemClick }) => {
  return (
    <div>
      <h2>{header}</h2>
      <ol>
        {items.map(item => (
          <li
            key={item.id}
            onClick={() => toggleItemClick(item.id)}
            style={{ textDecoration: item.clicked ? 'line-through' : 'none' }}
          >
            {item.text}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MyList;