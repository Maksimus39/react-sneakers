import s from "./Card.module.scss"


export const Card = (props) => {

    const onClickButtonHandler = () => {
        alert(props.title)
    }

    return (
        <div className={s.card}>
            <div className={s.favorite}>
                <img src="/img/svg/heart-unliked.svg" alt="Unliked"/>
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="Sneakers"/>
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price}. руб</b>
                </div>
                <button className={s.button} onClick={onClickButtonHandler}>
                    <img width={11} height={11} src="/img/svg/+.svg" alt="Plus"/>
                </button>
            </div>
        </div>
    )
}