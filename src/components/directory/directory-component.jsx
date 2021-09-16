import React from 'react';
import './directory-component.scss';
import Section from './data';
import MenuItem from './menu-items/menu-item-component';

class Directory extends React.Component {
    constructor(){
        super();    //It is used to call the constructor of the parent class
        this.state={Section};
    }
    render() {
        return(
            <div className="directory">
                {
                    this.state.Section.map(({title, ...otherSectionProps}) =>(
                        <MenuItem title={title}  {...otherSectionProps}/>
                    ))
                }
            
            </div>
        )
    }
}

export default Directory;