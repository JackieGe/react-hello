import React from 'react'
import './hello.css'

class Hello extends React.Component {
    constructor(...args) {
        super(...args);
    }

    render() {
        return (
            <div>
                <ul className="menu">
                    <li className="menu__item">
                        <a className="menu__itemLink" href="https://www.baidu.com"> Home Page (主页)
                        </a>
                    </li>
                    <li className="menu__item">
                        Contact Us
                    </li>
                </ul>

            </div>
        )
    }
}

export default Hello;