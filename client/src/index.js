import React from 'react';
import ReactDOM from 'react-dom';
import NavbarContainer from './navbar/navbar-container.js';
import CheckboxContainer from './checkbox-page/checkbox-page-container.js'
import './styles.css'

class App extends React.Component {
    render() {
        return (
            <div>
                <NavbarContainer />
                <CheckboxContainer />
            </div>
            
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)