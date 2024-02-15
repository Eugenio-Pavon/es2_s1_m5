import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Navigation from "./components/nav/Navigation";
import MyFooter from "./components/footer/MyFooter";
import Welcome from "./components/Welcome/Welcome";
import Books from "./components/books/AllTheBooks";

function App() {
  return (
    <>
      <Navigation />
      <Welcome/>
      
      <Books/>
      <MyFooter />
      

    </>
  );
}

export default App;
