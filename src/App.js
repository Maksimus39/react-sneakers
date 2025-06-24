function App() {
    return (
        <div className="wrapper clear">
            <header className="d-flex justify-between align-center p-40">
                <div className="d-flex align-center">
                    <img width={40} height={40} src="/img/logo.png" alt=""/>
                    <div>
                        <h3 className="text-uppercase">React sneakers</h3>
                        <p className="opacity-5">Магазин лучших кроссовок</p>
                    </div>
                </div>

                <ul className="d-flex">
                    <li className="mr-30">
                        <img width={18} height={18} src="/img/cart.svg" alt=""/>
                        <span>1205 руб.</span>
                    </li>
                    <li>
                        <img width={18} height={18} src="/img/user.svg" alt=""/>
                    </li>
                </ul>
            </header>

            <div className="content p-40">
                <div className="d-flex align-center mb-40 justify-between">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="Search"/>
                        <input placeholder="Поиск..."/>
                    </div>
                </div>

                <div className="d-flex flex-wrap">
                    <div className="card">
                        <img width={133} height={112} src="/img/sneakers/image1.jpg" alt="Sneakers"/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/+.svg" alt="Plus"/>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <img width={133} height={112} src="/img/sneakers/image2.jpg" alt="Sneakers"/>
                        <h5>Мужские Кроссовки Nike Air Max 270</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/+.svg" alt="Plus"/>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <img width={133} height={112} src="/img/sneakers/image3.jpg" alt="Sneakers"/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>8 499 руб.</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/+.svg" alt="Plus"/>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <img width={133} height={112} src="/img/sneakers/image4.jpg" alt="Sneakers"/>
                        <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>8 999 руб.</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/+.svg" alt="Plus"/>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <img width={133} height={112} src="/img/sneakers/image5.jpg" alt="Sneakers"/>
                        <h5>Мужские Кроссовки Under Armour Curry 8</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>15 199 руб.</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/+.svg" alt="Plus"/>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <img width={133} height={112} src="/img/sneakers/image6.jpg" alt="Sneakers"/>
                        <h5>Мужские Кроссовки Nike Kyrie 7</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>11 299 руб.</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/+.svg" alt="Plus"/>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <img width={133} height={112} src="/img/sneakers/image7.jpg" alt="Sneakers"/>
                        <h5>Мужские Кроссовки Jordan Air Jordan 11</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>10 799 руб.</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/+.svg" alt="Plus"/>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <img width={133} height={112} src="/img/sneakers/image8.jpg" alt="Sneakers"/>
                        <h5>Мужские Кроссовки Nike LeBron XVIII</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>16 499 руб.</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/+.svg" alt="Plus"/>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <img width={133} height={112} src="/img/sneakers/image9.jpg" alt="Sneakers"/>
                        <h5>Мужские Кроссовки Nike Lebron XVIII Low</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>13 999 руб.</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/+.svg" alt="Plus"/>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <img width={133} height={112} src="/img/sneakers/image10.png" alt="Sneakers"/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>8 499 руб.</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/+.svg" alt="Plus"/>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <img width={133} height={112} src="/img/sneakers/image11.png" alt="Sneakers"/>
                        <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>8 999 руб.</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/+.svg" alt="Plus"/>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <img width={133} height={112} src="/img/sneakers/image12.jpg" alt="Sneakers"/>
                        <h5>Мужские Кроссовки Nike Kyrie Flytrap IV</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>11 299 руб.</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/+.svg" alt="Plus"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;