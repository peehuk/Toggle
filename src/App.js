import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>WELCOME USER</h1>
        <h2>Please check your Credentials and Enter</h2>
        <form id="welcome" action="" method="get" />
        <label for="firstname">First name: </label>
        <input type="text" id="firstname" name="firstname" value="HARSHITA" />
        <br />
        <br />
        <label for="lastname">Last name: </label>
        <input type="text " id="lastname" name="lastname" value="KAUSHIK" />
        <br />
        <br />
        Female:
        <input type="checkbox" id="box" name="check" value="box" />
        <br />
        Male:
        <input type="checkbox" id="box" name="check" value="box" />
        <br />
        Others:
        <input type="checkbox" id="box" name="check" value="box" />
        <br /> <br />
        <button onClick={() => this.handleClick()}>
          {this.state.isToggleOn ? "SUBMIT" : "UNSUBMIT"}
        </button>
        <form />
      </div>
    );
  }
}

export default App;
