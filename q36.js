// What's the difference between useCallback and useMemo in practice?

// With useCallback you memoize functions, useMemo memoizes any computed value:

const fn = () => 42 // assuming expensive calculation here
const memoFn = useCallback(fn, [dep]) // (1)
const memoFnReturn = useMemo(fn, [dep]) // (2)

// (1) will return a memoized version of fn - same reference across multiple renders, as long as dep is the same. But every time you invoke memoFn, that complex computation starts again.

// (2) will invoke fn every time dep changes and remember its returned value (42 here), which is then stored in memoFnReturn.

