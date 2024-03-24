import './SearchResult.css'

export const SearchResult = ({searchResult, key}) => {
    return (
        <div className='SearchResult'>
            <a href={searchResult.esgURL} target='_blank'>{searchResult.itemName}</a>
        </div>
    )
}