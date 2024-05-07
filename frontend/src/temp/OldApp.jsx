import React, { useState, useEffect } from "react";
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

function OldApp() {
  const [data, setData] = useState([]);
  const apiUrl = "https://dummyjson.com/users";

  const fetchSpeakers = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      setData(data.users);
    } catch (error) {
      console.log("error", error);
    }
  };

  let isMounted = true;

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchSpeakers();

      if (isMounted) {
        setData(fetchedData);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [data]);

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          {item.firstName} {item.lastName}
        </li>
      ))}
    </ul>
  );
}

export default OldApp;
