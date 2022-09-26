import React from 'react'
import s from './Main.module.css'
import { useState } from 'react'
import { validaEmail, validaCpf } from './ValidaForm'

export const Main = () => {

    const [email, setEmail] = useState("")
    const [cpf, setCPF] = useState("")

    const validaInput = (event) => {
        event.preventDefault()
        
        if (!validaEmail(email)) {
            return alert('Insira um e-mail válido.')
        } if (!validaCpf(cpf)) {
            return alert('Insira um cpf válido.')
        }
        alert('Cadastro realizado com sucesso!')
        window.location.reload()
    }

    return <div className={s.conteudo}>
        <div className={s.informacoes}>
            <h3>
                Ajude o algoritmo a ser mais certeiro
            </h3>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend.
            </p>

            <p>
                Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus.
            </p>
        </div>

        <form className={s.formulario} onSubmit={validaInput}>
            <label htmlFor='name'>Seu nome:</label>
            <input required id='name' type='text' className={s.textInput}/>

            <label htmlFor='email'>E-mail</label>
            <input required id='email' type='text' className={s.textInput} onChange={e =>
            setEmail(e.target.value)
            }/>

            <label htmlFor='cpf'>CPF:</label>
            <input required id='cpf' type='text' className={s.textInput} onChange={e => setCPF(e.target.value)}/>

            <div className={s.radioInput}>
                <input required type='radio' id='masculino' name='radio' value='Masculino' />
                <label htmlFor="masculino">Masculino</label>
                <input type='radio' id='feminino' name='radio' value='Feminino' />
                <label htmlFor="feminino">Feminino</label>
            </div>

            <button>
                Enviar
            </button>
        </form>


    </div>
    
    
}