import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addPlayer } from "../redux/reducers/actions";
import store from "../redux/store";
import "../App.css";

class ScoreCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      playerName: "",
      parOptions: [3, 4, 5],
      holes: [],
    };
  }
  componentDidMount() {
    let holes = [];
    for (let i = 1; i <= 18; i++) holes.push(i);
    this.setState({
      holes,
    });
  }
  UpdatePlayerName = (input) => {
    this.setState({
      playerName: input,
    });
  };

  addPlayer = () => {
    this.props.addPlayer(this.state.playerName);
  };

  createHoleNumber = () => {
    return this.state.holes.map((column, index) => {
      return <th key={index}> {column}</th>;
    });
  };
  createHole = () => {
    return this.state.holes.map((column, index) => {
      return (
        <select key={index}>
          {this.state.parOptions.map((par, index) => {
            return (
              <option key={index} value={par}>
                {par}
              </option>
            );
          })}
        </select>
      );
    });
  };

  render() {
    console.log(store.getState());
    console.log(this.state);
    return (
      <div>
        <input
          onChange={(e) => this.UpdatePlayerName(e.target.value)}
          value={this.state.playerName}
        />
        <button onClick={this.addPlayer}>Add New Player</button>
        <div>
          <table className="table-container">
            <tbody>
              <tr className="table-header">{this.createHoleNumber()}</tr>
              <hr />
              <h3 className="table-header">PAR</h3>
              <hr />
              <tr className="table-header">{this.createHole()}</tr>
              <hr />
              <tr className="table-header">
                {this.state.playerName}
                {this.state.holes.map((hole, index) => {
                  return (
                    <div key={index}>
                      <input />
                    </div>
                  );
                })}
              </tr>{" "}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default connect(null, { addPlayer })(ScoreCard);
