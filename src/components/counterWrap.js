import React from 'react'
import ReactDOM from 'react-dom';
import Counter from './counter.jsx';

(function () {
    class CounterWrap {
        constructor(container) {
            this.container = container;
        }

        render() {
            ReactDOM.render(
                React.createElement(Counter),
                this.container
            )
            ReactDOM.unmountComponentAtNode
        }

        destroy() {
            ReactDOM.unmountComponentAtNode(this.container);
        }
    }
    window.CounterWrap = CounterWrap;
}());
