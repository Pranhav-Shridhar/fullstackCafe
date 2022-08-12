// What is equivalent of the following using React.createElement?

// Question:

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);


// Answer:

const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
