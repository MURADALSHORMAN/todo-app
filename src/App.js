  
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import ToDo from './components/Todo';
import ListContext from './context/setting-context';


function App() {
  return (
    <>
      <Header/>
      <ListContext>
        <ToDo/>
      </ListContext>
      <Footer/>
    </>
  );
}

export default App;