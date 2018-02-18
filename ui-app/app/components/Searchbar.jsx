import React from 'react';

import styles from './Searchbar.scss';

import SearchBar from 'react-search-bar'


import words from './words.json'

export default class Searchbar extends React.Component {

    constructor(props)
    {
        super(props);

        this.state = {
            hasContent: false,
            suggestions: []
        }

        this.handleClear = this.handleClear.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleClear() {
        this.setState({
            suggestions: [],
            hasContent: this.searchbar.querySelector('input[type="text"]').value.length > 0
        });
    }

    handleChange(input) {
        this.setState({
            suggestions: words.filter(word => word.startsWith(input)),
            hasContent: input.length > 0
        });
    }

    handleSelection(value) {
        if (value) {
            console.info(`Selected "${value}"`);
        }
    }

    handleSearch(value) {
        if (value) {
            console.info(`Searching "${value}"`);
        }
    }

    suggestionRenderer(suggestion, searchTerm) {
        return (
            <span>
                <span>{searchTerm}</span>
                <strong>{suggestion.substr(searchTerm.length)}</strong>
            </span>
        );
    }

    render() {
        return (
            <div className={styles.searchbarWrapper + (this.state.hasContent ? ' active' : '')}
                ref={(e) => (this.searchbar = e)}>

                <SearchBar
                    autoFocus={false}
                    renderClearButton
                    placeholder="Search"
                    onChange={this.handleChange}
                    onClear={this.handleClear}
                    onSelection={this.handleSelection}
                    onSearch={this.handleSearch}
                    suggestions={this.state.suggestions}
                    suggestionRenderer={this.suggestionRenderer}
                    styles={styles}
                />

                <i className="fas fa-search"></i>

            </div>
        )
    }
}
