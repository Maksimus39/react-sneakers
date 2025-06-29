import s from "./Card.module.scss"
import {useEffect, useState} from "react";


export const Card = ({onClickPlusCard, onClickFavorite, imageUrl, title, price}) => {
    const [isAdded, setIsAdded] = useState(false)

    const onClickPlus = () => {
        onClickPlusCard({imageUrl, title, price})
        setIsAdded(!isAdded)
    }

    useEffect(() => {

    }, [isAdded]);

    return (
        <div className={s.card}>
            <div className={s.favorite}>
                <img src="/img/svg/heart-unliked.svg" alt="Unliked" onClick={onClickFavorite}/>
            </div>
            <img width={133} height={112} src={imageUrl} alt="Sneakers"/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price}. руб</b>
                </div>

                <img className={s.plus} src={isAdded
                    ? "/img/svg/activeBtn.svg"
                    : "/img/svg/+.svg"}
                     alt="Plus"
                     onClick={onClickPlus}/>
            </div>
        </div>
    )
}