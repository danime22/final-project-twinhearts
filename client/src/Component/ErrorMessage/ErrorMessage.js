import React, { Component } from "react";

class ErrorMessage extends Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    getMessage() {
        if (this.props.message.length < 1) {
            return "";
        } else {
            return (
                <h1>{this.props.message}</h1>
            );
        }
    }

    render() {
        return (
            <div>
                {this.getMessage()}
            </div>
        )
    }
}

export default ErrorMessage;