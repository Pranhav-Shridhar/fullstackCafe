// Why we should not update state directly?

// If you try to update state directly then it won’t re-render the component.

//Wrong
This.state.message =”Hello world”;

// Instead use setState() method. It schedules an update to a component’s state object. When state changes, the component responds by re-rendering

//Correct
this.setState({message: ‘Hello World’});

// Note: The only place you can assign the state is constructor.