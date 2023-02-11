import logo from "./logo.svg";
import React, { useEffect } from "react";
import "./App.css";
import HelloReact from "./HelloReact";
import { useSelector, useDispatch } from "react-redux";
import allActions from "./actions";
import { useRef } from "react";
function App() {
  const counter = useSelector((state) => state.counter);
  const currentUser = useSelector((state) => state.currentUser);
  const inputValue = useSelector((state) => state.inputR);
  const dispatch = useDispatch();
  const value = useRef(null);
  const user = { name: "Rei" };

  useEffect(() => {
    dispatch(allActions.userActions.setUser(user));
    console.log(inputValue);
  }, []);
  return (
    <>
      {/* {
        currentUser.loggedIn ? 
        <>
          <h1>Hello, {currentUser.user.name}</h1>
          <button onClick={() => dispatch(allActions.userActions.logOut())}>Logout</button>
        </> 
        : 
        <>
          <h1>Login</h1>
          <button onClick={() => dispatch(allActions.userActions.setUser(user))}>Login as Rei</button>
        </>
        } */}
      <h1 ref={value}>Counter: {counter}</h1>
      <input
        onChange={(e) =>
          dispatch(allActions.inputActions.input(e.target.value))
        }
      />
      {/* <h2>{inputValue.map((val)=>val)} =k</h2> */}
      <button onClick={() => dispatch(allActions.counterActions.increment())}>
        Increase Counter
      </button>
      <button onClick={() => dispatch(allActions.counterActions.decrement())}>
        Decrease Counter
      </button>

      {/* <HelloReact/> */}
    </>
  );
}

export default App;
