// What is wrong with this code?
// Problem
// What is wrong with this code?

this.setState((prevState, props) => {
  return {
    streak: prevState.streak + props.count
  }
})

// Answer
// Nothing is wrong with it. It’s rarely used and not well known, but you can also pass a function to setState that receives the previous state and props and returns a new state, just as we’re doing above. And not only is nothing wrong with it, but it’s also actively recommended if you’re setting state based on previous state.