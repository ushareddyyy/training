import React, { Component } from "react";
import './Styles.css';

export class ClassComponent extends Component {
    constructor(props) {  // Fixed constructor spelling
        super(props);
        this.state = {
            clicked: false,
            message: 'Welcome everyone'
        };
    }

    changeMessage = () => {
        this.setState({
            clicked: true,
            message: 'Thank you'
        });
    };

    render() {
        let applyStyle = this.state.clicked ? 'heading' : 'heading1';
        return (
            <div>
                <h1 className={applyStyle}>{this.state.message}</h1>  {/* Used className */}
                <button onClick={this.changeMessage}>Click</button>  {/* Used onClick */}
            </div>
        );
    }
}
