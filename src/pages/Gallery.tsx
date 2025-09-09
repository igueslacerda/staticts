import { useMainContext } from "../MainContext";

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
    </>
    )
}

export default Gallery