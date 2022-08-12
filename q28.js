Do Hooks replace render props and higher-order components (HOC)?

Often, render props and higher-order components render only a single child. React team thinks Hooks are a simpler way to serve this use case.

There is still a place for both patterns (for example, a virtual scroller component might have a renderItem prop, or a visual container component might have its own DOM structure). But in most cases, Hooks will be sufficient and can help reduce nesting in your tree.