import React from 'react';
/*
this is a higher order funstion  that takes a any component and returns a new modified component with access
to location, map and history props
*/
import {withRouter} from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div className=
        {`${size} menu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div
            className="background-image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

//using the withRouter function now gives us access to history props
export default withRouter(MenuItem);