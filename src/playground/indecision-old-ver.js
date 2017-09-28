console.log('App.js is running');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of an AI',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value; // option is from the name attribute of the html element

  if(option) {
    app.options.push(option);
    e.target.elements.option.value = '';

    renderForm();
  }
};

const removeAll = () => {

  app.options = [];
  renderForm();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};


const appRoot = document.getElementById('app');



// Jsx - javascript xml

const renderForm = () => {
  // Jsx - javascript xml
  const template = (
    <div id="container">
      <h1>{ app.title }</h1>
      {/*because using && if neither is truthy, p tag wont show*/}
      { (app.subtitle) && <p> {app.subtitle} </p>}
      <p>{ app.options.length > 0 ? 'Here are your options' : 'No options' } </p>
      <p>{app.options.length}</p>

      <button onClick={onMakeDecision} disabled={app.options.length === 0}>What should I do?</button>
      <button onClick={removeAll}>Remove all</button>

      <ol>
        {
          // key attribute is a must to make an unique element
          app.options.map( (option) => {
            return <li key={option}>{option}</li>
          })
        }
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name='option'/>
        <button>Add Option</button>
      </form>

    </div>
  );

  ReactDOM.render(template, appRoot);

};

renderForm();
