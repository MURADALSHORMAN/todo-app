import React, { useEffect, useState, useContext } from 'react';
import Form from '../form/Form';
import List from '../list/List';
import { ListContext } from '../../context/settings/context';
import './todo.scss';
const ToDo = () => {
  const listObj = useContext(ListContext);
  const [incomplete, setIncomplete] = useState([]);

  

  useEffect(() => {
    let incompleteCount = listObj.list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
 
  }, [listObj.list]);

  return (
    <>
      <Form classNAme = 'split'/>
      <List incomplete = {incomplete} classNAme = 'split'></List>
    </>
  );
};

export default ToDo;