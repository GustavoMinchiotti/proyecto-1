//  import { useState } from "react";
import "./Campo.css"


const Campo = (props) => {
    // const [valor, setValor] = useState("")

    //* Destructuración del tipo de input
    const { type = "text" } = props

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value);   /** cada vez que actualice acumula en set valor "suma las letras" */
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input
            placeholder={props.placeholder}
            required={props.required}
            value={props.valor} // {/* vincula value con el estado valor */}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo;

// En las últimas clases vamos a manejar los valores ingresados en los inputs