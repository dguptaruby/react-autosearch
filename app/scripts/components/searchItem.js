import React from 'react';
import Item from './item';

const SearchItem = ({ items }) => {
    return (
        <div id="search-item">
            <div className={(items.length > 0 ? "showing " : "") + "search-item-container"}>
                {items.map(item => <Item key={item._id} product={item} />)}
            </div>
        </div>
    );
}

export default SearchItem;