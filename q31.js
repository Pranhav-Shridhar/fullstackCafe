// How to conditionally add attributes to React components?
// Problem
// Is there a way to only add attributes to a React component if a certain condition is met?

// Answer
// For certain attributes, React is intelligent enough to omit the attribute if the value you pass to it is not truthy. For example:

var InputComponent = React.createClass({
    render: function() {
        var required = true;
        var disabled = false;

        return (
            <input type="text" disabled={disabled} required={required} />
        );
    }
});

// will result in:

<input type="text" required>

// Another possible approach is:

var condition = true;

var component = (
  <div
    value="foo"
    { ...( condition && { disabled: true } ) } />
);