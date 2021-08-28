import React, { useState, useEffect, useContext } from 'react';
import { Button } from '@blueprintjs/core';
import { ListContext } from '../../context/context-Settings';

function List(props) {
  const settings = useContext(ListContext);
  const [page, setpage] = useState(1);
  const [activeList, setActiveList] = useState(props.list.slice(0, settings.items));
  const [pages, setpages] = useState(Number(Math.ceil(props.list.length / settings.items)));
  const [filterd, setfilterd] = useState([]);

  useEffect(() => {
    setActiveList(props.list.slice(0, settings.items));
    setpages(Number(Math.ceil(props.list.length / settings.items)));
  }, [props.list, settings.items]);

  const PagesList = () => {
    const pages = [];
    if(page > 1) pages.push(<Button className = 'primary' onClick = {() => changePage(page -1)}>Previous</Button>);
    for(let i = 1; i <= pages; i++){
      pages.push(<Button className = 'usual' onClick = {() => changePage(i)} key = {i}>{i}</Button>);
    }
    if(page < pages) pages.push(<Button className = 'primary' onClick = {() => changePage(page +1)}>Next</Button>);
    return pages;
  };

  const changePage = (pageNumber) => {
    if(pageNumber === page){
      return;
    }
    setpage(pageNumber);
  };

  useEffect(() => {
    const start = (page -1) * settings.items;
    const end = start + settings.items;
    setActiveList(props.list.slice(start, end));
  }, [page, props.list, settings.items]);

  function showIncomplete() {
    if (filterd === props.list)
      setfilterd(() => filterd.filter((item) => item.complete !== true));
    else setfilterd(props.list);
  }

  useEffect(() => {
    setfilterd(props.list);
  },[props.list]);

  return (
    <div className = 'split right'>
      <>
        <Button className = 'incomplete bp3-intent-warning' onClick = {showIncomplete}>
          Hide Complete {filterd === props.list? 'OFF' : 'ON'}
        </Button>
        {activeList.map((item) => (
          <div className = 'task-list' key={item.id}>
            <p style = {{fontWeight: 'bold'}}>{item.text}</p>
            <p>
              <small>Assigned to: {item.assignee}</small>
            </p>
            <p>
              <small>Difficulty: {item.difficulty}</small>
            </p>
            <p>
              <Button className = 'bp3-intent-success' onClick={() => props.toggleComplete(item.id)}>
                Complete: {item.complete.toString()}
              </Button>
            </p>
            <hr />
          </div>
        ))}
        <PagesList/>
      </>
    </div>
  );
}

export default List;