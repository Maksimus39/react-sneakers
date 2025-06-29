import {Card} from "./components/card/Card";
import {Header} from "./components/header/Header";
import {Drawer} from "./components/drawer/Drawer";
import {SearchHeader} from "./components/searchHeader/SearchHeader";
import {useEffect, useState} from "react";

function App() {

    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [cartOpened, setCartOpened] = useState(false)

    useEffect(() => {
        fetch("https://686100428e7486408444997e.mockapi.io/items").then((res) => {
            return res.json()
        }).then((json) => {
            setItems(json)
        })
    }, []);

    const onAddToCard = (el) => {
        setCartItems(prev => [el, ...prev])
    }

    return (
        <div className="wrapper clear">
            {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>}
            <Header onClickCart={() => setCartOpened(true)}/>

            <div className="content p-40">
                <SearchHeader/>

                <div className="d-flex flex-wrap">
                    {items.map((el, index) => {
                        return <Card key={index}
                                     title={el.name}
                                     price={el.price}
                                     imageUrl={el.imageUrl}
                                     onClickFavorite={() => console.log('добавили в закладки')}
                                     onClickPlusCard={(el) => onAddToCard(el)}
                        />
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;