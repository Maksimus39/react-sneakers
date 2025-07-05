import {Card} from "./components/card/Card";
import {Header} from "./components/header/Header";
import {Drawer} from "./components/drawer/Drawer";
import {SearchHeader} from "./components/searchHeader/SearchHeader";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [cartOpened, setCartOpened] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/items").then((res) => {
            setItems(res.data)
        })
        axios.get("http://localhost:3000/cart").then((res) => {
            setCartItems(res.data)
        })
    }, []);

    const onAddToCard = (el) => {
        axios.post("http://localhost:3000/cart", el).then(res => {
            setCartItems(prev => [res.data, ...prev])
        })
    }

    const onRemoveItem = (id) => {
        axios.delete(`http://localhost:3000/cart/${id}`).then(res => {
            setCartItems((prev) => prev.filter(item => item.id !== id))
        })
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

    const onAddToFavorite = () => {

    }

    return (
        <div className="wrapper clear">
            {cartOpened && <Drawer
                items={cartItems}
                onClose={() => setCartOpened(false)}
                onRemoveItem={onRemoveItem}
            />}

            <Header onClickCart={() => setCartOpened(true)}/>

            <div className="content p-40">
                <SearchHeader onChangeSearchInput={onChangeSearchInput}
                              searchValue={searchValue}
                              setSearchValue={setSearchValue}
                />

                <div className="d-flex flex-wrap">
                    {items
                        .filter(el => el.title.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((el, index) => {
                            return <Card key={index}
                                         title={el.title}
                                         price={el.price}
                                         imageUrl={el.imageUrl}
                                         onAddToFavorite={() => console.log('добавили в закладки')}
                                         onClickPlusCard={(el) => onAddToCard(el)}
                            />
                        })}
                </div>
            </div>
        </div>
    );
}

export default App;