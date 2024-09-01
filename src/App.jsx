import { useDispatch, useSelector } from "react-redux";
import {
  addbynumber,
  addcount,
  deletecount,
} from "./store/slices/counterslice";
import { useState } from "react";

function App() {
  const [incraementbynum, setincrementbynum] = useState(2);
  const dispatch = useDispatch();
  const selector = useSelector((state) => {
    return state.count;
  });
  const add = () => {
    dispatch(addcount());
  };

  return (
    <>
      <button onClick={add}>+</button> <br /> <br /> <br />
      {selector}
      <br /> <br /> <br />
      <button
        onClick={() => {
          dispatch(deletecount());
        }}
      >
        -
      </button>{" "}
      <br />
      {/* <input
        type="text"
        value={incraementbynum}
        onChange={(e) => {
          setincrementbynum(e.target.value);
        }}
      >
        amount:
      </input> */}
      <input
        type="number"
        value={incraementbynum}
        onChange={(e) => setincrementbynum(e.target.value)}
        // type="number"
        // value={incraementbynum}
        // onChange={(e) => {
        //   setincrementbynum(e.target.value);
        // }}
      ></input>
      <button
        onClick={() => {
          dispatch(addbynumber(Number(incraementbynum)));
        }}
      >
        add amount
      </button>
    </>
  );
}

export default App;
