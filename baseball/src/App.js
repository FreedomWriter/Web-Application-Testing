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
    homeActive: true,
    awayActive: false,
    player: "Jackie Robinson",
    hit: ""
  };

  changeHandler = e => {
    this.setState({
      player: e.target.value
    });
  };

  submitHandler = e => {
    this.setState({
      player: ""
    });
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
        if (this.state.outs === 2) {
          this.setState({
            outs: 0,
            homeActive: !this.state.homeActive,
            awayActive: !this.state.awayActive
          });
          if (this.state.inning <= 8) {
            if (this.state.awayActive) {
              this.setState({
                inning: this.state.inning + 1
              });
            }
          }
        }
      }
    }
  };

  ballHandler = () => {
    if (this.state.ball <= 3)
      this.setState({
        ball: this.state.ball + 1
      });
    if (this.state.ball === 3) {
      this.setState({
        ball: 0
      });
    }
  };

  hitHandler = () => {
    if (this.state.homeActive) {
      this.setState({
        ball: 0,
        strike: 0
      });
    } else if (this.state.awayActive) {
      this.setState({
        ball: 0,
        strike: 0
      });
    }
  };

  runHandler = () => {
    if (this.state.homeActive) {
      this.setState({
        home: this.state.home + 1,
        ball: 0,
        strike: 0
      });
    } else if (this.state.awayActive) {
      this.setState({
        away: this.state.away + 1,
        ball: 0,
        strike: 0
      });
    }
  };
  render() {
    console.log(`Home team at bat? ${this.state.homeActive}`);
    console.log(`Away team at bat? ${this.state.awayActive}`);
    return (
      <div className="page">
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
          homeAtBat={this.state.homeActive}
          awayAtBat={this.state.awayActive}
        />
        <Dashboard
          ball={this.state.ball}
          strike={this.state.strike}
          foul={this.state.foul}
          count={this.state.count}
          hit={this.state.hit}
          foulHandler={this.foulHandler}
          strikeHandler={this.strikeHandler}
          ballHandler={this.ballHandler}
          hitHandler={this.hitHandler}
          runHandler={this.runHandler}
          changeHandler={this.changeHandler}
        />
      </div>
    );
  }
}

export default App;
