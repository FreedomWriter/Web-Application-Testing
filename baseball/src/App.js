import React from "react";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";
import "./App.css";

class App extends React.Component {
  state = {
    ball: 0,
    strike: 0,
    foul: 0,
    count: 0,
    outs: 0,
    inning: 1,
    home: 0,
    away: 0,
    player: "Jackie Robinson",
    hit: ""
  };

  foulHandler = () => {
    console.log(`Foul button clicked`);
    if (this.state.strike <= 1) {
      this.setState({ strike: this.state.strike + 1 });
    }
  };

  strikeHandler = () => {
    console.log(`Strike button clicked`);
    if (this.state.strike <= 2) {
      this.setState({ strike: this.state.strike + 1 });
      if (this.state.strike === 2) {
        this.setState({
          strike: 0,
          ball: 0,
          outs: this.state.outs + 1
        });
      }
    }
  };
  render() {
    return (
      <div>
        <Display
          ball={this.state.ball}
          strike={this.state.strike}
          foul={this.state.foul}
          count={this.state.count}
          hit={this.state.hit}
          outs={this.state.outs}
          player={this.state.player}
          inning={this.state.inning}
          home={this.state.home}
          away={this.state.away}
        />
        <Dashboard
          ball={this.state.ball}
          strike={this.state.strike}
          foul={this.state.foul}
          count={this.state.count}
          hit={this.state.hit}
          foulHandler={this.foulHandler}
          strikeHandler={this.strikeHandler}
        />
      </div>
    );
  }
}

export default App;
