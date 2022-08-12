// Does React useState Hook update immediately?
// And how do you perform an action after useState hook has triggered?


// React useState and setState don’t make changes directly to the state object; they create queues to optimize performance, which is why the changes don’t update immediately. The process to update React state is asynchronous for performance reasons.

// To perform side effects after state has change, you must use the useEffect