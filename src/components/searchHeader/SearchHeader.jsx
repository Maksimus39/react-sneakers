export const SearchHeader = (props) => {
    return (
        <div className="d-flex align-center mb-40 justify-between">
            <h1>{props.searchValue ? `Поиск п запросу: "${props.searchValue}"` : 'Все кроссовки'}</h1>
            <div className="search-block d-flex">
                <img src="/img/svg/search.svg" alt="Search"/>
                <input placeholder="Поиск..." onChange={props.onChangeSearchInput}/>
            </div>
        </div>
    )
}