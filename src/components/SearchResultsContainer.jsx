import { useState } from 'react'
import { SearchResult } from './SearchResult';
import './SearchResultsContainer.css'

export const SearchResultsContainer = ({searchResults}) => {

    return (
        <div className='SearchResultsContainer'>
            {
                searchResults.map((searchResult, i) => {
                    return <SearchResult searchResult={searchResult} key={i}/>
                })
            }
        </div>
    );
}