import { useMainContext } from "../MainContext";
import Card from "../components/card/Card";

function Gallery() {
    const { ligado, toggleLigado } = useMainContext();
   
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
    </>
    )
}

export default Gallery