import React, { Component } from 'react';

class CheckboxPage extends Component {
    render() {
        return (
            <div>
                <div className="hosting-standards">
                    <p>Welcome guest!</p>
                    <p>To become a host, you must be able to hold our supper club standards. Your food must be a product of experience, deep knowledge and passion, and your space must also reflect those values.</p>
                    <input className ="checkbox" type="checkbox"/><label className = "checkbox-label">I agree</label>
                    <button className = "checkbox-btn">Continue</button>
                </div>
            </div>
        );
    }
}

export default CheckboxPage;