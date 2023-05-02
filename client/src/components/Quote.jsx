import React, { useState, useEffect } from "react";

export const Quote = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    generateQuote();
  }, []);

  const generateQuote = async () => {
    // random quote
    let rand = Math.floor(Math.random() * 1600) + 1;

    const res = await fetch(import.meta.env.VITE_QUOTE_API);
    const data = await res.json();
    setQuote(data[rand].text);
  };

  return (
    <div className="card p-2 m-2">
      <h1 className="text-center">Quote Generator</h1>
      <p className="text-center">{quote}</p>
      <button className="btn btn-dark btn-block" onClick={generateQuote}>Generate New Quote</button>
    </div>
  );
};
