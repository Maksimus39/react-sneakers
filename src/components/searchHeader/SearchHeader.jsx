export const SearchHeader = (props) => {
    return (
        <div className="d-flex align-center mb-40 justify-between">
            <h1>{props.searchValue
                ? `Поиск п запросу: "${props.searchValue}"`
                : 'Все кроссовки'}
            </h1>

            <div className="search-block d-flex">
                <img src="/img/svg/search.svg" alt="Search"/>

                {props.searchValue && <img className="removeBtn cu-p clear"
                                           src="/img/svg/removeBtn.svg"
                                           alt="Clear"
                                           onClick={() => props.setSearchValue('')}
                />}

                <input placeholder="Поиск..."
                       onChange={props.onChangeSearchInput}
                       value={props.searchValue}
                />
            </div>
        </div>
    )
}