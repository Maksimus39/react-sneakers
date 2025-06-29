import s from "./Drawer.module.scss"


export const Drawer = ({onClose, items = []}) => {
    return (
        <div className={s.overlay}>
            <div className={s.drawer}>
                <h2 className="d-flex justify-between mb-30">Корзина
                    <img
                        className="removeBtn cu-p"
                        src="/img/svg/removeBtn.svg"
                        alt="Remove"
                        onClick={onClose}
                    />
                </h2>

                <div className="items flex 1">

                    {items.map((obj) => {
                        return (
                            <div className="cartItem d-flex align-center mb-20">
                                <div
                                    style={{backgroundImage: `url(${obj.imageUrl})`}}
                                    className="cartItemImg mr-20"
                                ></div>

                                <div className="mr-20 flex">
                                    <p className="mb-5">{obj.name}</p>
                                    <b>{obj.price}. руб</b>
                                </div>

                                <img
                                    className="removeBtn"
                                    src="/img/svg/removeBtn.svg"
                                    alt="Remove"
                                />
                            </div>
                        )
                    })}
                </div>

                <div className={s.cartTotalBlock}>
                    <ul>
                        <li>
                            <span>Итого :</span>
                            <div></div>
                            <b>22 498 руб</b>
                        </li>
                        <li>
                            <span>Налог 5% :</span>
                            <div></div>
                            <b>1074 руб</b>
                        </li>
                    </ul>
                    <button className={s.greenButton}>
                        Оформить заказ
                        <img src="/img/svg/arrow.svg" alt="Arrow"/>
                    </button>
                </div>

            </div>
        </div>
    )
}