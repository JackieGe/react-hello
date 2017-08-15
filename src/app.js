import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/hello.jsx'
import NameList from './components/nameList.jsx'

ReactDOM.render(
    <Hello />,
    document.getElementById('container')
)

ReactDOM.render(
    <NameList/>,
    document.getElementById('nameList')
)