import React, { Component } from "react";
import Input from "./Input";
import Button from "./Button";
import Result from "./Result";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scope: "",
      target: "",
      results: [],
      warning: false,
    };
  }

  updateParameters(e, type) {
    this.setState({
      [type]: Number(e.target.value),
      warning: "changeOfParameters",
    });
  }

  generateNumbers() {
    const { scope, target } = this.state;
    if (
      scope < target ||
      scope === "" ||
      scope <= 0 ||
      target === "" ||
      target <= 0
    ) {
      this.setState({ warning: true });
      return;
    }
    const results = [];
    for (let i = 0; i < target; i++) {
      results[i] = Math.floor(Math.random() * scope + 1);
      let match = false;
      for (let j = 0; j < results.length - 1; j++) {
        if (results[j] === results[i]) match = !match;
      }
      if (match) i--;
    }
    this.setState({
      results: results.sort(function (a, b) {
        return a - b;
      }),
      warning: false,
    });
  }

  render() {
    return (
      <main>
        <Input type="scope" onChange={this.updateParameters.bind(this)} />
        <Input type="target" onChange={this.updateParameters.bind(this)} />
        <Button
          text="Losuj"
          className="btn1"
          onClick={this.generateNumbers.bind(this)}
        />
        <Result warning={this.state.warning} numbers={this.state.results} />
      </main>
    );
  }
}

export default Main;
