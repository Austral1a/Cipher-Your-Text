import React, { Component } from 'react';
import ErrorBoundary from './errorBoundary';

export default class Cipher extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentCipher: 'roti13'
        }
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({
            currentCipher: event.target.value,
        })
    }


    render() {
        return (
            <ErrorBoundary>
                <select defaultValue="roti13" updatefunc={String(this.props.updatefunc)} onClick={() => {
                    this.props.updatefunc(this.state.currentCipher)
                }} className="cipher" onChange={this.handleChange}>
                    <option value="roti13" >Roti13</option>
                    <option value="ascii" >ASCII</option>
                </select>
            </ErrorBoundary>
        )
    }
}