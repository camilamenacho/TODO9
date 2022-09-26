import React from 'react'
import s from './SectionTitle.module.css'

export const SectionTitle = ({ title }) => {
    return (
        <div className={s.tituloCaixa}>
            <span>
                <hr />
            </span>
            <h4 className={s.titulo}>{title}</h4>
            <span>
                <hr />
            </span>
        </div>
    )
}