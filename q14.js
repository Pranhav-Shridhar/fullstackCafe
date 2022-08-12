// Given the React code defined above, can you identify two problems?

// Take a look at the code below:

class MyComponent extends React.Component {
  constructor(props) {
    // set the default internal state
    this.state = {
      clicks: 0
    };
  }

  componentDidMount() {
    this.refs.myComponentDiv.addEventListener('click', this.clickHandler);
  }

  componentWillUnmount() {
    this.refs.myComponentDiv.removeEventListener('click', this.clickHandler);
  }

  clickHandler() {
    this.setState({
      clicks: this.clicks + 1
    });
  }

  render() {
    let children = this.props.children;

    return (
      <div className="my-component" ref="myComponentDiv">
      <h2>My Component ({this.state.clicks} clicks)</h2>
      <h3>{this.props.headerText}</h3>
    {children}
    </div>
    );
  }
}

// Given the code defined above, can you identify two problems?

// Answer

// The constructor does not pass its props to the super class. It should include the following line:

// constructor(props) {
//   super(props);
//   // ...
// }

// The event listener (when assigned via addEventListener()) is not properly scoped because ES2015 doesn’t provide autobinding. Therefore the developer can re-assign clickHandler in the constructor to include the correct binding to this:

// constructor(props) {
//   super(props);
//   this.clickHandler = this.clickHandler.bind(this);
//   // ...
// }