import React from 'react';
import logo from './logo.svg';


//higher order components

import {connect} from 'react-redux';

//Import Actions
import {firstAction} from './actions/actionOne';
import { secondAction } from './actions/actionTwo';
import './test-reduxUI.css';
class rotateFunction extends React.Component {
    render(){
        return(
            <div className="rotateFunction">
                <img src={logo}  alt="images" 
                className={"App-logo" + (this.props.rotate? "":"App-logo-paused")}
                onClick={this.props.rotate ? this.props.stopAction : this.props.startAction }/>
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    ...state
});
const mapDispatchToProps = (dispatch) =>({
    startAction:() => dispatch(firstAction),
    stopAction:() => dispatch(secondAction)
});
export default connect(mapStateToProps,mapDispatchToProps)(rotateFunction);