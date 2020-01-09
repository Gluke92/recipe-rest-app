import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LineGraphComponents from "./components/LineGraph.components";
import Header from "./components/Header.components";
import Summary from "./components/Summary.components";
import axios from "axios";
import TableDescription from "./components/TableDescription.components";
import EmploymentTable from "./components/EmploymentTable.components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    axios("http://www.mocky.io/v2/5a29b5672e00004a3ca09d33").then(res =>
      this.setState({ data: res })
    );
  }

  render() {
    if (this.state.data === undefined) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <Header {...this.state} />
          <Summary {...this.state} />
          <LineGraphComponents {...this.state} />
          <TableDescription {...this.state} />
          <EmploymentTable {...this.state} />
        </>
      );
    }
  }
}

export default App;
