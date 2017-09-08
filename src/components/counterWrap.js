import React from 'react'
import ReactDOM from 'react-dom';
import Counter from './counter.jsx';

(function () {
    class CounterWrap {
        constructor(container) {
            this.container = container;
            this.props = { count: 0 }
            this.element = React.createElement(Counter, this.props)
            setInterval(() => {
               this.props.count++;
               this.element.props = this.props;
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
