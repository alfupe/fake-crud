import React, { useState } from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import './search-control.scss';

const SearchControl = props => {
    const [query, setQuery] = useState('');

    const handleSearch = event => {
        event.preventDefault();
        props.onSearch(query);
    };

    const clearQuery = event => {
        setQuery('');
        props.onSearch('');
    };

    return (
        <form className="search-control"
              onSubmit={handleSearch}>
            <input className="search-control__input"
                   type="text"
                   value={query}
                   placeholder="Búscar…"
                   onChange={event => setQuery(event.target.value)}
            />
            {query &&
            <div className="search-control__clear"
                 onClick={clearQuery}>
                &times;
            </div>}
            <Button className="search-control__trigger"
                    text={<Icon icon="search" />}
                    type="submit"
            />
        </form>
    );
};

SearchControl.defaultProps = {
    onSearch: () => {}
}

export default SearchControl;
