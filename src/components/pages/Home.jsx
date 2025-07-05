import {SearchHeader} from "../searchHeader/SearchHeader";
import {Card} from "../card/Card";

export const Home = (props) => {
    return (
        <div className="content p-40">
            <SearchHeader onChangeSearchInput={props.onChangeSearchInput}
                          searchValue={props.searchValue}
                          setSearchValue={props.setSearchValue}
            />

            <div className="d-flex flex-wrap">
                {props.items
                    .filter(el => el.title.toLowerCase().includes(props.searchValue.toLowerCase()))
                    .map((el, index) => {
                        return <Card key={index}
                                     title={el.title}
                                     price={el.price}
                                     imageUrl={el.imageUrl}
                                     onAddToFavorite={(el) => props.onAddToFavorite(el)}
                                     onClickPlusCard={(el) => props.onAddToCard(el)}
                        />
                    })}
            </div>
        </div>
    )
}