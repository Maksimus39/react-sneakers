import s from "./Drawer.module.scss"


export const Drawer = ({onClose, items = [], onRemoveItem}) => {
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

                {items.length > 0
                    ? <div className="items flex 1">

                        {items.map((obj) => {
                            return (
                                <div key={obj.id} className="cartItem d-flex align-center mb-20">
                                    <div
                                        style={{backgroundImage: `url(${obj.imageUrl})`}}
                                        className="cartItemImg mr-20"
                                    ></div>

                                    <div className="mr-20 flex">
                                        <p className="mb-5">{obj.title}</p>
                                        <b>{obj.price}. руб</b>
                                    </div>

                                    <img
                                        className="removeBtn"
                                        src="/img/svg/removeBtn.svg"
                                        alt="Remove"
                                        onClick={() => onRemoveItem(obj.id)}
                                    />
                                </div>
                            )
                        })}
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
                    : <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                        <img src="/img/svg/cartEmpty.svg" alt="Box"/>
                        <h2>Корзина пустая</h2>
                        <p className="opacity-6">Добавьте хотя бы одну пару кроссовок чтобы сделать заказ</p>
                        <button className={s.cartEmptyButton} onClick={onClose}>
                            <img src="/img/svg/arrowLeft.png" alt="Arrow" className={s.arrowLeft}/>
                            Вернуться назад
                        </button>
                    </div>
                }




            </div>
        </div>
    )
}