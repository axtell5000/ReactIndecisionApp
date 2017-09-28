
class ToggleIt extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.state = {
      isDisplayed: false
    }
  }

  toggleDisplay() {
    this.setState( (prevState) => {// Question you must ask if you should use prevState, Does your method need to
      // know what the previous state to work as intended - This eg YES
      return {
        isDisplayed: !prevState.isDisplayed
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibilty Toggle</h1>
        <button onClick={this.toggleDisplay}>{this.state.isDisplayed ? 'Hide Details' : 'Show Details'}</button>
        { (this.state.isDisplayed) && <p>Here are some details you can see</p>}
      </div>
    );
  }

}

ReactDOM.render(<ToggleIt/>, document.getElementById('app'));

