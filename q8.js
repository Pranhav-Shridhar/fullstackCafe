// What is useState() in React?

// Explain what is the use of useState(0) there:

// Answer

const [count, setCounter] = useState(0);
const [moreStuff, setMoreStuff] = useState(...);


const setCount = () => {
    setCounter(count + 1);
    setMoreStuff(...);

};

// useState is one of build-in react hooks. useState(0) returns a tuple where the first parameter count is the current state of the counter and setCounter is the method that will allow us to update the counter's state.

// We can use the setCounter method to update the state of count anywhere - In this case we are using it inside of the setCount function where we can do more things; the idea with hooks is that we are able to keep our code more functional and avoid class based components if not desired/needed.