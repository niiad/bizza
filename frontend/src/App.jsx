import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchSpeaker from "./components/SearchSpeaker";

function SpeakerProfile(props) {
  return (
    <>
      <h3>{props.name}</h3>
      <p>Position: {props.jobTitle}</p>
      <p>Company: {props.company}</p>
    </>
  );
}

function App() {
  return (
    <div style={{ backgroundColor: "blue", margin: 20, color: "white" }}>
      <h1>Bizza Platform</h1>
      <SearchSpeaker />
    </div>
  );
}

export default App;
