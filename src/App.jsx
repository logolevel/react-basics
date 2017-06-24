import React from 'react';
import ReactDom from 'react-dom';


import todos from './todos';
import Header from './components/Header';
import Todo from './components/Todo';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: this.props.initialData
        };
    }

    render() {
        return (
            <main>
                <Header title={this.props.title} />

                <section className="todo-list">
                    { this.state.todos.map( todos => 
                        <Todo key={todos.id} title={todos.title} completed={todos.completed} />)
                    }
                </section>
            </main>
        );
    }
}


App.propTypes = {
    title: React.PropTypes.string,
    initialData: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        completed: React.PropTypes.bool.isRequred
    })).isRequired
}

App.defaultProps = {
    title: 'React Todo Default'
}

ReactDom.render(<App initialData={todos} />, document.getElementById('root'));