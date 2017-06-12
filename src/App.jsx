import React from 'react';
import ReactDom from 'react-dom';


function App() {
    return (
        <div>
            <h1>React Todo</h1>
            <p className="subtitle">Это первое приложение на React</p>
        </div>
    );
}

ReactDom.render(<App />, document.getElementById('root'));





