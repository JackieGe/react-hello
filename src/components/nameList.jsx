import React from 'react'
import './nameList.css'

function calcZIndex(input) {
    return input > 0 ? input % 2 : 0;
}

class NameList extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.selectAll = this.selectAll.bind(this)
        this.deselectAll = this.deselectAll.bind(this)
        this.handleMouseEnterOnRow = this.handleMouseEnterOnRow.bind(this);
        this.state = { people: this.props.people }
    }

    handleClick(evt) {
        var row;
        if (evt.target instanceof HTMLTableCellElement) {
            row = evt.target.parentElement;
        } else if (evt.target instanceof HTMLTableRowElement) {
            row = evt.target;
        }

        if (row) {
            row.classList.toggle('nameList__row--active');
        }
    }

    handleMouseEnter(evt) {
        var span = evt.target.parentElement.getElementsByTagName('span')[0];
        // alert(span.innerText);
    }

    selectAll() {
        var newPeople = this.state.people.map(function (p) {
            p.isSelected = true;
            return p;
        })

        this.setState({
            people: newPeople
        })
    }

    deselectAll() {
        var newPeople = this.state.people.map(function (p) {
            p.isSelected = false;
            return p;
        })

        this.setState({
            people: newPeople
        })
    }

    handleMouseEnterOnRow(evt) {
        var currentTr = evt.currentTarget;
        if (currentTr) {
            if (currentTr.dataset && !currentTr.dataset.tooltip) {
                var tooltip = document.createElement('div');
                tooltip.classList.add('tooltip')
                tooltip.id = currentTr.children[0].innerText;
                tooltip.innerText = 'Hello World'
                tooltip.style.display = 'none'
                currentTr.dataset.tooltipId = tooltip.id;
                document.body.appendChild(tooltip)
            }

            var tool = document.getElementById(currentTr.dataset.tooltipId);
            if (tool) {
                var clientX = evt.clientX;
                var clientY = evt.clientY;
                setTimeout(() => {
                    tool.style.display = 'block'
                    tool.style.left = clientX + 'px';
                    tool.style.top = clientY + 'px';
                    console.log('set position...')
                }, 10)

            }
        }
    }

    handleMouseLeaveOnRow(evt) {
        var currentTr = evt.currentTarget;
        if (currentTr) {
            if (currentTr.dataset && currentTr.dataset.tooltipId) {
                var tool = document.getElementById(currentTr.dataset.tooltipId);
                if (tool) {
                    setTimeout(() => {
                        tool.style.display = 'none'
                    }, 10)
                }
            }
        }
    }

    render() {
        var handleMouseEnter = this.handleMouseEnter;
        var handleMouseEnterOnRow = this.handleMouseEnterOnRow;
        var handleMouseLeaveOnRow = this.handleMouseLeaveOnRow;
        var thead = (
            <thead className="nameList__head" style={{ width: "100%", marginTop: 1 }}>
                <tr>
                    <th>Name</th>
                    <th>Title</th>
                    <th></th>
                </tr>
            </thead>
        );
        return (
            <div>
                <button onClick={this.selectAll}> Select All</button>
                <button onClick={this.deselectAll}> Deselect All</button>
                <table className="nameList">
                    <colgroup>
                        <col width={100} />
                        <col width={140} />
                        <col width={140} />
                    </colgroup>
                    {thead}
                    <tbody onClick={this.handleClick}>
                        {
                            this.state.people.map(function (person, index) {
                                return (
                                    <tr className={person.isSelected ? "nameList__row nameList__row--active" : "nameList__row"} onMouseEnter={handleMouseEnterOnRow} onMouseLeave={handleMouseLeaveOnRow} style={index > 0 ? { color: 'green', zIndex: calcZIndex(index), width: 380, overflow: 'hidden' } : {}} key={index}>
                                        <td key={index + '_0'}>{person.name}</td>
                                        <td key={index + '_1'}>{person.title}</td>
                                        <td>
                                            <div className="nameRowActionButtons">
                                                <button className="nameRowActionButtons__edit" onMouseEnter={handleMouseEnter} >Edit</button>
                                                <button className="nameRowActionButtons__delete">Delete</button>
                                                <span style={{ display: 'none' }}> Show tooltip </span>
                                            </div>
                                        </td>
                                    </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

// let NameList = React.createClass({
//     PropTypes: {
//         people: React.PropTypes.array.isRequired
//     },


//     handleClick: function (evt) {
//         var row;
//         if (evt.target instanceof HTMLTableCellElement) {
//             row = evt.target.parentElement;
//         } else if (evt.target instanceof HTMLTableRowElement) {
//             row = evt.target;
//         }

//         if (row) {
//             row.classList.toggle('nameList__row--active');
//         }
//     },

//     handleMouseEnter: function (evt) {
//         var span = evt.target.parentElement.getElementsByTagName('span')[0];

//         alert(span.innerText);
//     },

//     render: function () {
//         var handleMouseEnter = this.handleMouseEnter;
//         var thead = (
//             <thead className="nameList__head" style={{ width: "100%", marginTop: 1 }}>
//                 <tr>
//                     <th>Name</th>
//                     <th>Title</th>
//                     <th></th>
//                 </tr>
//             </thead>
//         );
//         return (
//             <table className="nameList">
//                 <colgroup>
//                     <col width={100} />
//                     <col width={140} />
//                     <col width={140} />
//                 </colgroup>
//                 {thead}
//                 <tbody onClick={this.handleClick}>
//                     {
//                         this.props.people.map(function (person, index) {
//                             return (
//                                 <tr className="nameList__row" style={index > 0 ? { color: 'red', zIndex: calcZIndex(index), width: 380, overflow: 'hidden' } : {}} key={index}>
//                                     <td key={index + '_0'}>{person.name}</td>
//                                     <td key={index + '_1'}>{person.title}</td>
//                                     <td>
//                                         <div className="nameRowActionButtons">
//                                             <button className="nameRowActionButtons__edit isActive" onMouseEnter={handleMouseEnter} >Edit</button>
//                                             <button className="nameRowActionButtons__delete isActive">Delete</button>
//                                             <span style={{ display: 'none' }}> Show tooltip </span>
//                                         </div>
//                                     </td>
//                                 </tr>)
//                         })
//                     }
//                 </tbody>
//             </table>
//         );
//     }
// })

export default NameList