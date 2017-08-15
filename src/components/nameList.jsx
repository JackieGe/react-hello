import React from 'react'

let names = ['Jackie', 'Lucy', 'Tom'];
let NameList = React.createClass({

    render: function () {
        return (
            <div>
                {
                    names.map(function (name, index) {
                        return <div key={index}> {name} </div>;
                    })
                }
            </div>
        );
    }
})

export default NameList