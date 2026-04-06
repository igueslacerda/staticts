import { useMainContext } from "../MainContext";
import Card from "../components/card/Card";
import DTable from "../components/dtable/DTable";

function Gallery() {
    const { ligado, toggleLigado } = useMainContext();
   
    const columns = [
        { id: "nome", titulo: "Nome" },
        { id: "idade", titulo: "Idade" },
        { id: "cidade", titulo: "Cidade" }
    ];

    const dataSource = [
        { nome: "João Silva", idade: 25, cidade: "São Paulo" },
        { nome: "Maria Oliveira", idade: 30, cidade: "Rio de Janeiro" },
        { nome: "Pedro Santos", idade: 28, cidade: "Belo Horizonte" }
    ];

    return (
    <>
        <h2>Galeria de componentes</h2>
        <p>
            Aqui estariam os componentes da galeria
        </p>
        <p>
            <button onClick={toggleLigado}>{ligado}</button>
        </p>
        <Card title="Título do Card" subtitle="Subtítulo do Card">
            Este é o conteúdo do card. Pode ser qualquer coisa, como texto, imagens, ou outros componentes React.
        </Card>
        <Card title="Exemplo de DTable" subtitle="Tabela Dinâmica">
            <DTable columns={columns} dataSource={dataSource} />
        </Card>
    </>
    )
}

export default Gallery