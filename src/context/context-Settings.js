import React, { useState } from 'react';
export const ListContext = React.createContext();

function Settings(props) {
  const [items, setItems] = useState(3);
  const [Completed, setCompleted] = useState(true);

  const states = {
    items,
    Completed,
    setItems,
    setCompleted,
  };

  return (
    <ListContext.Provider value = {states}>
      {props.children}
    </ListContext.Provider>
  );
}

export default Settings;