import {Card} from "./components/card/Card";
import {Header} from "./components/header/Header";
import {Drawer} from "./components/drawer/Drawer";
import {SearchHeader} from "./components/searchHeader/SearchHeader";


const arrSneakers = [
    {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999., imageUrl: "/img/sneakers/image1.jpg"},
    {name: 'Мужские Кроссовки Nike Air Max 270', price: 12999., imageUrl: "/img/sneakers/image2.jpg"},
    {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499., imageUrl: "/img/sneakers/image3.jpg"},
    {name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999., imageUrl: "/img/sneakers/image4.jpg"},
    {name: 'Мужские Кроссовки Under Armour Curry 8', price: 15199., imageUrl: "/img/sneakers/image5.jpg"},
    {name: 'Мужские Кроссовки Nike Kyrie 7', price: 11299., imageUrl: "/img/sneakers/image6.jpg"},
    {name: 'Мужские Кроссовки Jordan Air Jordan 11', price: 10799., imageUrl: "/img/sneakers/image7.jpg"},
    {name: 'Мужские Кроссовки Nike LeBron XVIII', price: 16499., imageUrl: "/img/sneakers/image8.jpg"},
    {name: 'Мужские Кроссовки Nike Lebron XVIII Low', price: 13999., imageUrl: "/img/sneakers/image9.jpg"},
    {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499., imageUrl: "/img/sneakers/image10.png"},
    {name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999., imageUrl: "/img/sneakers/image11.png"},
    {name: 'Мужские Кроссовки Nike Kyrie Flytrap IV', price: 11299., imageUrl: "/img/sneakers/image12.jpg"}
]

function App() {
    return (
        <div className="wrapper clear">
            <Drawer/>
            <Header/>

            <div className="content p-40">
                <SearchHeader/>

                <div className="d-flex flex-wrap">
                    {arrSneakers.map((el) => {
                        return <Card title={el.name}
                                     price={el.price}
                                     imageUrl={el.imageUrl}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;