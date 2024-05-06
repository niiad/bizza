import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

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
    <>
      <h1>Speaker Profile</h1>
      <SpeakerProfile
        name="Juliet Runolf"
        jobTitle="Director, Marketing"
        company="Abernathy Group"
      />
    </>
  );
}

export default App;
