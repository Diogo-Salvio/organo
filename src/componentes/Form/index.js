import "./Form.css"
import TextCamp from "../TextCamp"

const Form = () => {
    return (
        <section className="form">
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextCamp label="Nome" placeholder="Digite seu nome" />
                <TextCamp label="Cargo" placeholder="Digite seu cargo" />
                <TextCamp label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    )
}


export default Form