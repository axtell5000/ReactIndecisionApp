import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {


  // Allows us or another user to set default state
  state = {
    options: []
  };

  handleDeleteOptions = () => {
    // This is the same as the commented out setState. If returning an object, you HAVE to use a pair of ()
    this.setState( () => ({ options: [] }));

    // this.setState( () => {
    //   return {
    //     options:[]
    //   };
    // });
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  };

  handleAddOption = (option) => {

    if(!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) { // indexOf checks if options array has an element of
      // option. indexOf returns a -1 if not found
      return 'This option already exists';
    }

    this.setState( (prevState) =>  ({
      options: prevState.options.concat(option)
    }));
  };

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
        <OptionModal/>
      </div>
    );
  }
}

// Allows us or another user to set default state
IndecisionApp.defaultProps = {
  options: []
};




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
