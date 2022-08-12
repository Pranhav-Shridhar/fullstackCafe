// What are Higher-Order Components (HOC) in React?

// A higher-order component (HOC) is a function that takes a component and returns a new component. Basically, it’s a pattern that is derived from React’s compositional nature We call them as “pure’ components” because they can accept any dynamically provided child component but they won’t modify or copy any behavior from their input components.

const EnhancedComponent = higherOrderComponent(WrappedComponent);

// HOC can be used for many use cases as below,

// Code reuse, logic and bootstrap abstraction
// Render High jacking
// State abstraction and manipulation
// Props manipulation