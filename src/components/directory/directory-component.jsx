import React from 'react';
import './directory-component.scss';
// import Section from './data';
import MenuItem from './menu-items/menu-item-component.jsx';

class Directory extends React.Component {
    constructor(){
        super();    //It is used to call the constructor of the parent class
        this.state={products:[]};
    }

    componentDidMount(){
        fetch('https://fakestoreapi.com/products').then(resp =>resp.json())
        .then(resp=>this.setState({products:resp}))
        
    }
    render() {
        return(
            <div className="directory">
                <table className="table table-striped table-bordered table-hovered">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Title</td>
                            <td>Images</td>
                            <td>Price</td>
                            
                        </tr>
                    </thead>
                    <tbody>
                
                {
                    this.state.products.map(({title,image, ...otherSectionProps}) =>(
                        <MenuItem title={title} image={image}  {...otherSectionProps}/>
                    ))
                }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Directory;