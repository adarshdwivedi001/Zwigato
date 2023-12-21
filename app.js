const heading  = React.createElement("div", {id:"parents"},
                [React.createElement('div', {id:"child1"}, 
                [React.createElement('h1', {id:"child1"},"I am from ch1"),
                 React.createElement('h2', {id:"child1"},"I am from ch1")]),
                React.createElement('div', {id:"child2"}, 
                [React.createElement('h1', {id:"child2"},"I am from ch2"),
                 React.createElement('h2', {id:"child2"},"I am from ch2")]) ] )

 console.log(heading); // returns object

 const root = ReactDOM.createRoot(document.getElementById('root'));

 root.render(heading);