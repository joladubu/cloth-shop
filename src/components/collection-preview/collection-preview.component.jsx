import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component'

//declaring a functional component

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items
            //chaining array methods using .filter, .map
            // filtering the number of items on display not exceeding 4
            .filter((item, idx) => idx < 4)
            .map(({ id, ...otherItemProps}) => (
                <CollectionItem key={id}{...otherItemProps} />
            ))}
        </div>
    </div>
)

export default CollectionPreview;