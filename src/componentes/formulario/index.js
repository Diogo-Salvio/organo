import './formulario.css'
import CampoTexto from '../campotexto'
import ListaSuspensa from '../listasuspensa'
import Botao from '../botao'


const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile', 
        'Inovação e Gestão'
    ]

    const aoSalvar = (event) => {
        event.preventDefault()
        console.log(event)
        console.log('FormOK')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o Card</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo" />
                <CampoTexto label="Imagem" placeholder="Insira sua imagem" />
                <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
                <Botao >
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario