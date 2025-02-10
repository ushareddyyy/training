import { useState } from "react";
import "./SampleApp.css";

export default function SampleApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Simple Counter App</h1>
      <p>Count: {count}</p>
      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
      <img src="your-image-url.jpg" alt="Sample" className="image"/>
    </div>
  );
}
