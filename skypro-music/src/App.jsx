// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Player from "./componets/Player";
import Navigation from "./componets/Navigation";
import PlayList from "./componets/PlayList";
import MainSidebar from "./componets/MainSidebar";
function App() {


  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Navigation />
          <PlayList />
          <MainSidebar />
        </main>
        <Player />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}
export default App;
