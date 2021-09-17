import React from 'react';
import {withRouter} from 'react-router-dom';
import TableComp from '../tableproducts/table-component';

const MenuItem = ({title,price,id, image, history, match, category, location, linkUrl}) =>{
    // console.log(match);
    // console.log(history);
    // console.log(location);

    return(
        // <div className= {`${price} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        //     <div className= "background-image" style={{backgroundImage: `url(${image})`}}/>
        
        //     </div>

        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td><img src={image} alt="Images" width="50px"/></td>
            <td>{price}</td>
        </tr>
    )
}

export default withRouter(MenuItem);