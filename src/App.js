import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import NaviBar from "./Components/NaviBar";
import UpperTable from "./Components/UpperTable";
import ServProj from "./Components/servicesProjects";

function App() {
  return (
    <div className="App">
      <NaviBar></NaviBar>
      <UpperTable></UpperTable>
      <ServProj></ServProj>
    </div>
  );
}

export default App;
