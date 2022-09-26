import React from 'react'
import s from './Header.module.css'

export const Header = () => {
    return (
        <div>
            <div className={s.header}>
                <h2>uma seleção de produtos</h2>
                <h1>especial para você</h1>
                <p> Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
                <div className={s.btns}>
                    <button>Conheça a Linx</button>
                    <button>Ajude o algoritmo</button>
                    <button>Seus produtos</button>
                    <button>Compartilhe</button>
                </div>
            </div>


        </div>
    )
}