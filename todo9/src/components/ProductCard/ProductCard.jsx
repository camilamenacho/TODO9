import React from 'react'
import s from './ProductCard.module.css'

export const ProductCard = ({image, title, description, oldPrice, newPrice, numberOfInstallments, installmentValue}) => {
    return (
        <div className={s.cards}>
            <div className={s.card}>
                <img src={image} />
                <p className={s.title}> {title}</p>
                <p className={s.regularText}>{description}</p>
                <p className={s.regularText}>{`De: R$${oldPrice}`}</p>
                <p className={s.newPrice}>{`Por: R$${newPrice}`}</p>
                <p className={s.regularText}> {`ou ${numberOfInstallments}x de R$${installmentValue}`}</p>

                <button>Comprar</button>
            </div>
            
        </div>
    )
}
