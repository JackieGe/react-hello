import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/hello.jsx'
import NameList from './components/nameList.jsx'
import Counter from './components/counter.jsx'
import './components/counterWrap.js'

ReactDOM.render(
    <Hello />,
    document.getElementById('container')
)

let people = [
    {name: 'Jackie', title: 'Developer'},
    {name: 'Lucy', title: 'BA'},
    {name: 'Tom', title: 'Product Manager'},
]

ReactDOM.render(
    <NameList people={people}/>,
    document.getElementById('nameList')
)

ReactDOM.render(
    <Counter />,
    document.getElementById('counter')
)