import { useMainContext } from "../MainContext";
import Card from "../components/card/Card";
import DTable from "../components/dtable/DTable";
import Divider from "../components/divider/Divider";
import { useState } from "react";

function Gallery() {
    const { ligado, toggleLigado } = useMainContext();
    const [dataFromFetch, setDataFromFetch] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
   
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

    const columnsFetch = [
        { id: "id", titulo: "ID" },
        { id: "name", titulo: "Nome" },
        { id: "username", titulo: "Usuário" },
        { id: "email", titulo: "Email" }
    ];

    const handleCarregarDados = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            const limitedData = data.slice(0, 9).map((user: any) => ({
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email
            }));
            setDataFromFetch(limitedData);
        } catch (error) {
            console.error("Erro ao carregar dados:", error);
        } finally {
            setIsLoading(false);
        }
    };

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
        <Divider />
        <Card title="Exemplo de DTable" subtitle="Tabela Dinâmica">
            <DTable columns={columns} dataSource={dataSource} />
        </Card>
        <Card title="DTable com fetch" subtitle="Tabela com dados de API">
            <>
                <button onClick={handleCarregarDados} disabled={isLoading}>
                    {isLoading ? "Carregando..." : "Carregar Dados"}
                </button>
                <DTable columns={columnsFetch} dataSource={dataFromFetch} />
            </>
        </Card>
    </>
    )
}

export default Gallery