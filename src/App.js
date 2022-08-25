import React from "react";
import "./App.css";
import { incNumber } from "./store/actions";
import { decNumber } from "./store/actions";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  
  const changeTheNumber = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
        <div class="container">
          <h1>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>

          <div class="quantity">
            <button onClick={() => dispatch(decNumber())}>-</button>
            <input
              name="quantity"
              type="text"
              class="quantity__input"
              value={changeTheNumber}
            />

            <button onClick={() => dispatch(incNumber(5))}>+</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
