import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
       
    render() {
        return (
            <div>
                <div className="counter_text">Your score: {this.props.ctr}</div>
                <button onClick={this.props.onIncCounter}>Increase one</button>
                <button >Decrease one</button>
                <button >Reset</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncCounter: () => dispatch({type: "INCREMENT"}),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);