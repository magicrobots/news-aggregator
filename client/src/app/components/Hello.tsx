"use client"; // This line must be at the very top of the file

import { useEffect, useState } from "react";

const Hello = () => {
  const [message, setMessage] = useState("");
  const [inputValue, setInputValue] = useState(""); // State for input value

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // Update input value
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload

    try {
      const res = await fetch("http://localhost:8080/api/hello", {
        method: "POST", // Change to POST method
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: inputValue }), // Send input data as JSON
      });

      const data = await res.json();
      setMessage(data.message || "No response from server");
      setInputValue(""); // Clear input after submission
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div>
      <h1>Hello from Java API:</h1>
      <p>{message || "Loading..."}</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a word or phrase"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Hello;

