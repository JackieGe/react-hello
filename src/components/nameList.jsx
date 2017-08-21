import React from 'react'
import './nameList.css'

let NameList = React.createClass({
    PropTypes: {
        people: React.PropTypes.array.isRequired
    },


    handleClick: function (evt) {
        var row;
        if (evt.target instanceof HTMLTableCellElement) {
            row = evt.target.parentElement;
        } else if (evt.target instanceof HTMLTableRowElement) {
            row = evt.target;
        }

        if (row) {
            row.classList.toggle('nameList__row--active');
        }
    },

    render: function () {
        return (
            <table className="nameList">
                <colgroup>
                    <col width={100}/>
                    <col width={140}/>
                    <col width={140}/>
                </colgroup>
                <thead className="nameList__head">
                <tr>
                    <th>Name</th>
                    <th>Title</th>
                    <th></th>
                </tr>
                </thead>
                <tbody onClick={this.handleClick}>
                {
                    this.props.people.map(function (person, index) {
                        return (
                            <tr className="nameList__row" key={index}>
                                <td key={index + '_0'}>{person.name}</td>
                                <td key={index + '_1'}>{person.title}</td>
                                <td>
                                    <div className="nameRowActionButtons">
                                        <button className="nameRowActionButtons__edit">Edit</button>
                                        <button className="nameRowActionButtons__delete">Delete</button>
                                    </div>
                                </td>
                            </tr>)
                    })
                }
                </tbody>
            </table>
        );
    }
})

export default NameList