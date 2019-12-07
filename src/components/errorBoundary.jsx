import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = { hasError: false }
    }

    static getDeviredStateFromError(error) {
        return { hasError: true }
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong, sorry. Try to reload page.</h1>
        }

        return this.props.children;
    }
}