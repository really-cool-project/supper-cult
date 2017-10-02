import React, { Component } from 'react';

class Apply extends Component {
    render() {
        return (
            <div className="applyComponent">
                <div className="applyHeader">
                    <p className="applyTitle">Pitch your supper</p>
                    <p className="applyDescription">As you pitch, remember that guests look for passion and good execution</p>
                </div>
                <div className="applyBody">
                    <textarea className="applyTextarea" placeholder="Tell us how your supper will be unique" rows="12" cols="80"/>
                    <button className="applySubmit">Pitch my supper!</button>
                </div>
            </div>
        );
    }
}

export default Apply;