import "./Colaborador.css"
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai"

const Colaborador = (props) => {
    const { nombre, puesto, foto, id, fav } = props.datos
    const { colorPrimario, eliminarColaborador, like } = props //esto va al estilo inline de la tarjeta
    return <div className="colaborador" >
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h4>{puesto}</h4>
            {fav ? <AiFillHeart color="red" onClick={() => like(id)} /> : <AiOutlineHeart onClick={() => like(id)} />}
        </div>

    </div>
}

export default Colaborador  //* Será importado en equipo    