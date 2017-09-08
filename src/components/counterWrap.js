import React from 'react'
import ReactDOM from 'react-dom';
import Counter from './counter.jsx';

(function () {
    class CounterWrap {
        constructor(container) {
            this.container = container;
            this.element = React.createElement(Counter, { count: 11 })
            setInterval(() => {
                
                // this.element.state.count++;
            }, 1000)
        }

        render() {
            ReactDOM.render(
                // React.createElement(Counter),
                this.element,
                this.container
            )
        }

        destroy() {
            ReactDOM.unmountComponentAtNode(this.container);
        }
    }
    window.CounterWrap = CounterWrap;
}());
