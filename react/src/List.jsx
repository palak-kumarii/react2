import React, { useState } from 'react';

const List = () => {
  const [items, setItems] = useState([
    "apple", "banana", "orange", "grapes", "mango", "litchi", "guava"
  ]);

  const handleDelete = (indexToRemove) => {
    const updatedItems = items.filter((_, index) => index !== indexToRemove);
    setItems(updatedItems);
  };

  return (
    <div>
      {items.map((element, index) => (
        <React.Fragment key={index}>
          <h1>{index}: {element}</h1>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </React.Fragment>
      ))}
    </div>
  );
};

export default List;
