import React from 'react';
import logo from './logo.svg';
import './test-reduxUI.scss';

//higher order components

import {connect} from 'react-redux';

//Import Actions
import {firstAction} from './actions/actionOne';
import { secondAction } from './actions/actionTwo';

class rotateFunction extends React.Component {
    render(){
        return(
            <div className="rotateFunction">
                <img src={logo}  alt="images" className={this.props.rotate? "n":"App-logo-paused"} 
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