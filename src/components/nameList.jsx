import React from 'react'
import './nameList.css'

let NameList = React.createClass({
    PropTypes: {
        people: React.PropTypes.array.isRequired
    },


    handleClick: function (evt) {
        console.log(evt);
        var row;
        if (evt.target instanceof HTMLTableCellElement) {
          row = evt.target.parentElement;
        } else if (evt.target instanceof HTMLTableRowElement) {
            row = evt.target;
        }

        if (row) {
            if (!row.classList.contains('nameList__tr--active')) {
                row.classList.add('nameList__tr--active');
            }else {
                row.classList.remove('nameList__tr--active')
            }
        }
    },

    render: function () {
        return (
            <table className="nameList">
                <colgroup>
                    <col width={100}/>
                    <col width={140}/>
                </colgroup>
                <thead className="nameList__thead">
                    <tr>
                        <th>Name</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody onClick={this.handleClick}>
                {
                    this.props.people.map(function (person, index) {
                        return (
                            <tr className="nameList__tr" key={index}>
                                <td key={index + '_0'}>{person.name}</td>
                                <td key={index + '_1'}>{person.title}</td>
                            </tr>)
                    })
                }
                </tbody>
            </table>
        );
    }
})

export default NameList