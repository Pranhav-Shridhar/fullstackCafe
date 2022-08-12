// What's wrong with that code?
// Problem
// Consider:

this.setState({
  counter: this.state.counter + this.props.increment,
});

// What's wrong with that code?

// Answer
// Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state. To fix it, use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:

// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));