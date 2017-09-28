/* The little app below illustrates what happens behind the scenes of React and the re - rendering of element when
 * data changes. With the virtual dom this allows React to just render parts that change not the whole document (
  * which would be expensive performance wise )  */


class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this); // fix binding for one event

    this.state = {
      count:0
    }
  }

  componentDidMount() {
    const stringCount = localStorage.getItem('count');
    const count = parseInt(stringCount, 10);

    if (!isNaN(count)) {
      this.setState(() => ({ count }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count)
    }
  }

  handleAddOne() {
    // this.state.count = this.state.count + 1; // We cant do this, because then our component wont be rerendered
    this.setState( (prevState) => { // When we do this we are updating the state not replacing it
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinusOne() {
    this.setState( (prevState) => {
      return {
        count: prevState.count - 1
      };
    })
  }

  handleReset() {
    this.setState( () => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={() => this.handleMinusOne()}>-1</button>
        <button onClick={() => this.handleReset()}>Reset</button>
      </div>
    );
  }
}

// Counter.defaultProps = {
//   count: 0
// };

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
//
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
//
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
//
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };
//
//
// const appRoot = document.getElementById('app');
//
// const renderCounterApp = () => {
//
//   const template = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
//
//   ReactDOM.render(template, appRoot);
// };
//
// renderCounterApp();
