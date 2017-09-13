import React from 'react'

class Row extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        var { onRowClick, idx } = this.props;
        if (onRowClick) {
            onRowClick(idx);
        }
    }

    render() {
        var { person, idx, isSelected } = this.props;
        var handleClick = this.handleClick;

        return (
            <tr key={idx} onClick={handleClick} className={isSelected ? "nameList__row nameList__row--active" : "nameList__row"} >
                <td key="0"> {person.name} </td>
                <td key="1"> {person.title} </td>
                <td key="3">
                    <div className="nameRowActionButtons">
                        <button className="nameRowActionButtons__edit" >Edit</button>
                        <button className="nameRowActionButtons__delete">Delete</button>
                        {/* <span style={{ display: 'none' }}> Show tooltip </span> */}
                    </div>
                </td>
            </tr>
        )
    }
}

export default Row