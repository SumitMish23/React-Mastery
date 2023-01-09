import "./HelloReact.scss";
import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import Product from './Product'
const Greeting = () => {
  return <h1>Hi</h1>;
};

export function SearchBar() {
  return (
    <div
      style={{ border: "2px solid black", width: "400px" }}
      className="searchBar"
    >
      <div className="input" style={{ padding: "0rem 2rem" }}>
        <input type="text" name="" id="" placeholder="Search...." />
        <div className="checkbox">
          <input
            style={{ display: "inline-block", marginLeft: "8px" }}
            type="checkbox"
            name=""
            id=""
          />
          <p style={{ display: "inline", marginLeft: "8px" }}>
            Only Show Products in stock
          </p>
        </div>
      </div>
    </div>
  );
}
export function ProductCategoryRow(){
  return(
    <div className="heading" style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
    <h4>Fruits</h4>
    <h4>Vegetables</h4>
    </div>
    
  )
}
export function ProductRow(){
  return(
   <div className="row" style={{display:'flex',flexDirection:'column'
   ,justifyContent:'center'}}>
    <ul>
      <li  style={{color:'black'}}>Apple</li>
      <li  style={{color:'black'}}>DragonFruit</li>
      <li  style={{color:'black'}}>PassionFruit</li>
    </ul>

    <ul>
    <li  style={{color:'black'}}>Spinach</li>
      <li  style={{color:'black'}}>Cauliflower</li>
      <li  style={{color:'black'}}>potato</li>
    </ul>
   </div>
    
  )
}
export function ProductTable() {
  return (
    <div className="productTable" style={{width:'400px'}}>
      <div className="heading" style={{display:'flex',justifyContent:'space-evenly'}}>
        <p>Name</p>
        <p>Price</p>
      </div>

      <div className="productCategory">
        <ProductCategoryRow/>
        <ProductRow/>
      </div>
    </div>
  );
}

export function SetCount(props){ 
  return (
    // console.log(props.count)
    <button onClick={()=>props.setCount(props.count+1)}>{props.count}</button>
  )
}


const HelloReact = () => {
  const [list, setList] = useState(["Buy Milk", "Tacos"]);
  const [indexClicked, setIndex] = useState(100);
  const [input, setInput] = useState("");
  const [buttonInput, setButtonInput] = useState(list[indexClicked]);
  const [count, setCount] = useState(0);

  //  ------------------------------------
  const [val, setValue] = useState("");
  const [greet, setGreet] = useState("Morning");
  const [clicked, setClicked] = useState(false);
  

  function setInputField(val, index) {
    if (indexClicked === index) {
      return (
       
        <div>
          <input
            type="text"
            defaultValue={list[index]}
            onChange={(e) => {
              setButtonInput(e.target.value);
            }}
          />
        </div>
      );
    } else {
      return <p>{val}</p>;
    }
  }
  function editValue(index) {
    setIndex(index);
  }
  function manipulateCount() {
    setCount((c) => c + 1);
    setCount({ ...count, a: "100" });
  }
  function removeListItem(index) {
    let newList = list.filter((val, realIndex) => {
      return index !== realIndex;
    });
    setList(newList);
  }
  function handleInputChange(e) {
    if (val === "") {
      setValue("Enter something");
    } else {
      setValue(e.target.value);
    }
  }
  const implementHamburger = () => {
    setClicked(!clicked);
  };
  useEffect(() => {
    const date = new Date();

    if (date.getHours() > 12 && date.getHours() < 19) {
      setGreet("Afternoon");
    } else if (date.getHours() > 19 && date.getHours() < 24) {
      setGreet("Night");
    } else {
      setGreet("Morning");
    }
  }, []);

  return (
    <div className="container">
      <div className="hello">
      <SetCount count={count} setCount={setCount}/>
      </div>
      <div className={clicked ? "hamburger" : "navbar"}>
        <button className="hamburgerButton">
          <Hamburger
            className="button"
            size={22}
            onToggle={() => {
              implementHamburger();
            }}
          />
        </button>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Me</li>
          <li>Experience</li>
        </ul>
      </div>

      <div className="greeting">
        <h1>Good {greet}</h1>
        <button
          onClick={() => {
            manipulateCount();
          }}
        >
          {JSON.stringify(count)}
        </button>
        <Greeting></Greeting>
      </div>

      {/*-------------------------Input-----------------------------  */}
      {/* <div className="input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          style={{ margin: "0 12px" }}
          onClick={() => {
            setList([...list, input]);
            setInput("");
          }}
        >
          Add
        </button>

        {list.map((val, index) => {
          return (
            <> */}
      {/* Conditional Rendering */}

      {/* {setInputField(val, index)}
               <button
                onClick={() => {
                  editValue(index);
                }}
              >
                {indexClicked === index ? "Save" : "Edit"}
              </button>

              <button
                style={{ margin: "0 12px" }}
                onClick={() => {
                  removeListItem(index);
                }}
              >
                Delete
              </button>
            </>
          );
        })}
      </div> */}
      <div className="buildReact">
        <div className="filterableProductTable">
          <SearchBar />
          <ProductTable/>
        </div>
      </div>
      <div className="product">
        <Product/>
      </div>
      {/* <div className="input">
        <input type="text" />
        <button>add</button>
       <p>Buy Milk</p> <button>Add</button> <button>Delete</button>
       
       <p>Eat Tacos</p><button>Add</button> <button>Delete</button>
       <p>Brew Tea</p><button>Add</button> <button>Delete</button>

      </div> */}
      {/* <input type="text" onChange={(e) => handleInputChange(e)} />
      <h1>List</h1>
      <ul>
        <li>The Entered Number is {val} </li>
      </ul> */}
    </div>
  );
};
export default HelloReact;
