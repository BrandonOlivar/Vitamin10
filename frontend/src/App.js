import React, { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://your-backend-url.onrender.com/api/quote")  // replace with your actual Render URL
      .then((res) => res.json())
      .then((data) => setQuote(data.quote));
  }, []);

  return (
    <div>
      <h1>Random Quote</h1>
      <p>{quote || "Loading..."}</p>
    </div>
  );
}

export default App;
