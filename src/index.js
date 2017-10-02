import React from 'react';
import ReactDOM from 'react-dom';
import NavbarContainer from './navbar/navbar-container.js';
import './styles.css'

class App extends React.Component {
    render() {
        return (
            <div>
                <NavbarContainer />
            </div>
            
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)