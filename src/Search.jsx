import { useEffect } from "react";
import { useState } from "react";
export default function Search() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  console.log(input);
 
  function setInputValue(e) {
    setInput(e.target.value);
   }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <input
        style={{ padding: "0.8rem", fontSize: "0.9rem", marginLeft: "15rem" }}
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setInputValue(e);
        }}
      />
      <ul>
        {data
          .filter((val) => {
            return val.title.toLowerCase().includes(input.toLowerCase());
          })
          .map((val) => {
            return <li style={{ textAlign: "center" }}>{val.title}</li>;
          })}
      </ul>
    </>
  );
}
