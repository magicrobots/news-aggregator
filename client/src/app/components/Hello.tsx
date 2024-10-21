// Hello.tsx
"use client"; // This line must be at the very top of the file

import { useEffect, useState } from "react";

const Hello = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/hello");
        const data = await res.json();
        setMessage(data.message);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello from Java API:</h1>
      <p>{message || "Loading..."}</p>
    </div>
  );
};

export default Hello;
