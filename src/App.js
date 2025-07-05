import {Header} from "./components/header/Header";
import {Drawer} from "./components/drawer/Drawer";
import {useEffect, useState} from "react";
import axios from "axios";
import {Home} from "./components/pages/Home";
import {NavLink} from "react-router";

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

    const onAddToFavorite = (id) => {
        axios.post("http://localhost:3000/cart", id).then(res => {
            setFavorites(prev => [res.data, ...prev])
        })
    }
    console.log('2.10.21')

    return (
        <div className="wrapper clear">
            {cartOpened && <Drawer
                items={cartItems}
                onClose={() => setCartOpened(false)}
                onRemoveItem={onRemoveItem}
            />}

            <Header onClickCart={() => setCartOpened(true)}/>

            <NavLink to={'/'}>
                <Home items={items}
                      searchValue={searchValue}
                      favorites={favorites}
                      onAddToCard={onAddToCard}
                      onChangeSearchInput={onChangeSearchInput}
                      onAddToFavorite={onAddToFavorite}
                />
            </NavLink>
        </div>
    );
}

export default App;