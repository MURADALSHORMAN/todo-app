import React from 'react';

function Header(props) {
  return (
    <div>
      <h2>To Do : {props.incomplete} Items pending</h2>
    </div>
  );
}

export default Header;