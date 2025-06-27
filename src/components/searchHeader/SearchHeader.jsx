export const SearchHeader = () => {
  return (
      <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
              <img src="/img/svg/search.svg" alt="Search"/>
              <input placeholder="Поиск..."/>
          </div>
      </div>
  )
}