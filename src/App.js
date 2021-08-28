import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import ToDo from './components/ToDo/ToDo';
import ListContext from './context/context-Settings';


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