import React from 'react'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import s from './Share.module.css'
import { validaEmail } from '../Main/ValidaForm'
import { useState } from 'react'

export const Share = () => {
    const [friendEmail, setFriendEmail] = useState("")

    const handleFriendEmailValidation = (event) => {
        event.preventDefault()

        if (!validaEmail(friendEmail)) {
            alert('Insira um e-mail válido.')
            return
        }
        alert('Mensagem enviada!')
        window.location.reload()
    }

    return <div className={s.share}>
        <SectionTitle
            title="Compartilhe a novidade"
        />

        <p>
            Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!
        </p>

        <div>
            <form onSubmit={handleFriendEmailValidation} className={s.shareForm}>
                <div className={s.shareDiv}>
                    <div className={s.label}>
                        <label htmlFor='friendName'>Nome do seu amigo:</label>
                        <input required id='friendName' type='text' className={s.shareFormInput} />
                    </div>

                    <div className={s.label}>
                        <label htmlFor='friendEmail'>E-mail:</label>
                        <input required id='friendEmail' type='text' className={s.shareFormInput} onChange={e => setFriendEmail(e.target.value)}
                        />
                    </div>
                </div>
                <button className={s.shareButton}>
                    Enviar
                </button>
            </form>
        </div>
    </div>
}