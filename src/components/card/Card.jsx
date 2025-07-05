import s from "./Card.module.scss"
import {useState} from "react";


export const Card = ({onClickPlusCard, imageUrl, title, price, onAddToFavorite}) => {
    const [isAdded, setIsAdded] = useState(false)
    const [isFavorite, setIsFavorite] = useState(true)


    const onClickPlus = () => {
        onClickPlusCard({imageUrl, title, price})
        setIsAdded(!isAdded)
    }

    const onClickFavoriteCard = () => {
        onAddToFavorite({imageUrl, title, price})
        setIsFavorite(!isFavorite)
    }

    return (
        <div className={s.card}>
            <div className={s.favorite}>
                <img src={isFavorite
                    ? "/img/svg/heart-unliked.svg"
                    : "/img/svg/hearts-liked.svg"}
                     alt="Unliked"
                     onClick={onClickFavoriteCard}/>
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