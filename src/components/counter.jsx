import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        
        // setInterval(()=>{
        //     this.setState({
        //         count: this.state.count + 1
        //     })
        // },1000);

        this.timeInternal = setInterval((function() {
            this.setState({
                count: this.state.count + 1
            })
        }).bind(this), 1000)

        // setInterval(function() {
        //     this.setState({
        //         count: this.state.count + 1
        //     })
        // }, 1000)
    }

    render() {
        return (
            <div> {this.state.count} </div>
        )
    }

    componentWillUnmount() {
        if(this.timeInternal) {
            clearInterval(this.timeInternal);
        }
    }
}

export default Counter;