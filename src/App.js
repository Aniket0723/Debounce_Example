import { useEffect, useState } from "react";
import "./styles.css";

// const debounce = (fn,delay = 1000)=>{
//   let timer;
//   return(...args)=>{
//     clearTimeout(timer);
//     timer = setTimeout(()=>{
//       fn(...args);
//     },delay)
//   }
// }
// const makeRequest = (value) =>{
//   console.log('Sending Request ',value)
// }

// const debounced = debounce(makeRequest,1000);

export default function App() {
  const [value, setValue] = useState();
  //componnet re render nhi ho raha hai
  console.log("render");

  const handleChange = (e) => {
    setValue(e.target.value);
    // debounced(e.target.value)
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("calling server API", value);
    }, 1000);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="App">
      <h1>Hello Debounce</h1>
      <h2>Tutorial on Debounce in React</h2>
      <hr />
      <input type="text" onChange={handleChange} placeholder="search" />
      <h2>{value}</h2>
    </div>
  );
}
