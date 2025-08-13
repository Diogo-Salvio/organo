import './formulario.css'
import CampoTexto from '../campotexto'
import ListaSuspensa from '../listasuspensa'
import Botao from '../botao'
import { useState } from 'react'


const Formulario = (props) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (event) => {
        event.preventDefault()
        props.aoColaboradorCadastrado({
            nome, 
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o Card</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o seu nome"
                    value={nome}
                    aoAlterado={value => setNome(value)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    value={cargo}
                    aoAlterado={value => setCargo(value)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Insira sua imagem"
                    value={imagem}
                    aoAlterado={value => setImagem(value)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.times}
                    value={time}
                    aoAlterado={value => setTime(value)}
                />
                <Botao >
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario