import {NavLink} from "react-router";


export const Header = (props) => {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">

                    <img width={40} height={40} src="/img/svg/logo.png" alt="Logo"/>

                <div>
                    <h3 className="text-uppercase">React sneakers</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>

            <ul className="d-flex">
                <li className="mr-30 cu-p" onClick={props.onClickCart}>
                    <img width={18} height={18} src="/img/svg/cart.svg" alt="cart"/>
                    <span>1205 руб.</span>
                </li>

                <NavLink to={'/favorite'}>
                    <li className="mr-30 cu-p">
                        <img width={18} height={18} src="/img/svg/favorite.svg" alt="favorite"/>
                        <span>Закладки.</span>
                    </li>
                </NavLink>

                <li>
                    <img width={18} height={18} src="/img/svg/user.svg" alt="user"/>
                </li>
            </ul>
        </header>
    )
}