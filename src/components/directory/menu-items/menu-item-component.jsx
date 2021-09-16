import React from 'react';

class MenuItem extends React.Component {
    render(){
        return(
            <div>
                <div><img src={this.props.imageUrl} alt="#"width="200px" /></div>
                <div>{this.props.title}</div>
            </div>
        )
    }
}

export default MenuItem;