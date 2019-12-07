import React, { Componenet } from 'react';
import ErrorBoundary from './errorBoundary';

export default function TextArea(props) {
    return (
        <ErrorBoundary>
            <div className="text-area">
                <textarea onChange={props.onChange} value={props.val} name="input" cols="0" rows="0"></textarea>
            </div>
        </ErrorBoundary>
    )
}