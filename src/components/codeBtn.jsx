import React from 'react';
import ErrorBoundary from './errorBoundary';

export default function CodeBtn(props) {

    return (
        <ErrorBoundary>
            <button onClick={props.clickEvent} type="button" className="code-btn">
                {props.whatDo}
            </button>
        </ErrorBoundary>
    )
} 