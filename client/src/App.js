import React from "react";
import Login from "./components/Login";
import "./components/main.scss";

export const Context = React.createContext();

const App = () => {
  return (
    <div className="App">
      <Login />
    </div>
  );
};

export default App;
