import React from "react";
import ReactDOM from "react-dom";
import style from "./index.css"

const Index = () => {
  return <div className={style.test}>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));