function MyComponent() {
    return React.createElement('h1', null, 'Hello, React!');
}
const domContainer = document.querySelector('#my-react-component');
ReactDOM.render(React.createElement(MyComponent), domContainer);

