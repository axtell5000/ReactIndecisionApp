



class IndecisionApp extends React.Component {

  constructor(props) {
    super(props);

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);

    // Allows us or another user to set default state
    this.state = {
      options: []
    }
  }

  // React lifecycle methods - can only be used in Class based Components
  componentDidMount() {
    const json = localStorage.getItem('options');
    const options = JSON.parse(json);

    if (options) {
      this.setState(() => ({ options }));
    }
  }

  componentDidUpdate(prevProps, prevState) {

    try {

      if (prevState.options.length !== this.state.options.length) {
        // Have to use this when working with arrays
        const json = JSON.stringify(this.state.options); // converting javascript object to json
        localStorage.setItem('options', json); // only working with strings
      }

    } catch (e) {
      // do nothing
    }

  }

  componentWillUnmount() {
    console.log('component will unmount');
  }

  handleDeleteOptions() {
    // This is the same as the commented out setState. If returning an object, you HAVE to use a pair of ()
    this.setState( () => ({ options: [] }));

    // this.setState( () => {
    //   return {
    //     options:[]
    //   };
    // });
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option) {

    if(!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) { // indexOf checks if options array has an element of
      // option. indexOf returns a -1 if not found
      return 'This option already exists';
    }

    this.setState( (prevState) =>  ({
      options: prevState.options.concat(option)
    }));
  }

  render() {

    const subtitle = "Put your life in the hands of a computer.";

    // handlePick={this.handlePick} - Passing down a function as a prop
    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

// Allows us or another user to set default state
IndecisionApp.defaultProps = {
  options: []
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      { props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

// Stateless functional component
const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  );
};

// Stateless functional component
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      {
        props.options.map( (option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
          )
        )
      }
    </div>
  );
};

// Stateless functional component
const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText)
        }}
      >
        remove
      </button>
    </div>
  );
};


class AddOption extends React.Component {

  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }

  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name='option'/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

// This is a statelessFunctional component, they cant and dont deal with  state, but can receive props in a
// different way than the class based component. Cant use this. Good for just presentational components.
// Also faster

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: </p>
//     </div>
//   )
// };

// Allows us or another user to set default state
ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
