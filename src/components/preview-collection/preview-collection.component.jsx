import React from 'react';
import './preview-collection.styles.scss';
import CollecitonItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title,items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items.filter((item, index) => index < 4).map(({id, ...otherItemProps}) => (
                <CollecitonItem key={id} {...otherItemProps}></CollecitonItem>
            ))}
        </div>
    </div>  
);

export default CollectionPreview;