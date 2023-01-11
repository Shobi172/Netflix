import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { action,Trending,TopRated,Comedy,Horror,Romance,Documantaries } from "./urls";
import './App.css';
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={Trending} title='Trending' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={TopRated} title='TopRated' isSmall />
      <RowPost url={Comedy} title='Comedy' isSmall />
      <RowPost url={Horror} title='Horror' isSmall />
      <RowPost url={Romance} title='Romance' isSmall />
      <RowPost url={Documantaries} title='Documantaries' isSmall />
      <Footer />
      
      
    </div>
  );
}

export default App;
