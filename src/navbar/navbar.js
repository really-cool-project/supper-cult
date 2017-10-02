import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className = "navbar">
                <a href="" className = "logo">Logo</a>
                <ul className = "navbar-link-container">
                    <li><a href="">Host a Supper</a></li>
                    <li className = "sign-up"><a href="">Sign Up</a></li>
                    <li className = "login"><a href="">Log In</a></li>
                    <li>
                        <a href="">Profile</a>
                        <ul className = "hidden">
                            <li><a className = "hidden-li" href="">Profile</a></li>
                            <li><a className = "hidden-li" href="">Hearted Suppers</a></li>
                            <li><a className = "hidden-li" href="">RSVPs</a></li>
                            <li><a className = "hidden-li" href="">Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navbar;