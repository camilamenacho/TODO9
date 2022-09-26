import React, { useEffect, useState } from 'react'
import { ProductCard } from '../ProductCard/ProductCard.jsx'
import { SectionTitle } from '../SectionTitle/SectionTitle.jsx'
import s from './Products.module.css'

export const Products = () => {

    const [page, setPage] = useState(1)
    const [products, setProducts] = useState([])

    const url = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`

    const getProducts = async () => {
        try {
            let res = await fetch(url)
            let data = await res.json()
            setProducts([...products, ...data.products])
        }
        catch (error) {
            console.log(error)
        }
    }

    const showMoreProducts = () => {
        setPage(page + 1)
    }

    useEffect(() => {
        getProducts()
    }, [page])

    return (
        <div className={s.products}>
            <SectionTitle
                title="Sua seleção especial"
            />
            <div className={s.cards}>
                {products.map((product, index) => {
                    return <ProductCard
                        image={product.image}
                        title={product.name}
                        description={product.description}
                        oldPrice={product.oldPrice}
                        newPrice={product.price}
                        numberOfInstallments={product.installments.count}
                        installmentValue={product.installments.value}
                        key={index}
                    />
                })}
            </div>

            <button className={s.maisProdutos} onClick={showMoreProducts}>
                Ainda mais produtos aqui!
            </button>
        </div>
    )
}