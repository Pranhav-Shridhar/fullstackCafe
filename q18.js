// What do these three dots (...) in React do?

// What does the ... do in this React (using JSX) code and what is it called?

<Modal {...this.props} title='Modal heading' animation={false}/>

// Answer

// That's property spread notation. It was added in ES2018 (spread for arrays/iterables was earlier, ES2015).

// For instance, if this.props contained a: 1 and b: 2, then

<Modal {...this.props} title='Modal heading' animation={false}>

//</Modal>would be the same as:

<Modal a={this.props.a} b={this.props.b} title='Modal heading' animation={false}>

// Spread notation is handy not only for that use case, but for creating a new object with most (or all) of the properties of an existing object — which comes up a lot when you're updating state, since you can't modify state directly:

this.setState(prevState => {
    return {foo: {...prevState.foo, a: "updated"}};
});