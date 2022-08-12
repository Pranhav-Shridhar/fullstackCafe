// How do I update state on a nested object with useState()?
// Problem
// I have a component that receives a prop that looks like this:

const styles = {
    font: {
        size: {
            value: '22',
            unit: 'px'
        },
        weight: 'bold',
        color: '#663300',
        family: 'arial',
        align: 'center'
    }
};

// How to update only the align property?

// Answer
// You need to use spread syntax. Also while trying to update current state based on previous, use the callback pattern os setState:

const { ...styling } = styles;
const [style, setStyle] = useState(styling);
...

setStyle(prevStyle => ({
        ...prevStyle,
        font: { ...prevStyle.font, align: event.target.value }
    }));