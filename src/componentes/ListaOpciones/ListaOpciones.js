//? Es hijo de formulario */
import "./ListaOpciones.css"

const ListaOpciones = (props) => {
    // map -> nombreArreglo.map((ítem, index) => {
    // return <option></option>
    // })

    // const equipos = [
    //     "Programación",
    //     "Front End",
    //     "Data Science",
    //     "Devops",
    //     "UX y Diseño",
    //     "Móvil",
    //     "Innovación y Gestión"
    // ]                                //* estos datos ahora vienen de app como props

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)  /** con esto cada vez que selecciono deja la opción como valor del select */
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, index) => { return <option key={index} value={equipo} > {equipo} </option> })}
        </select>
    </div>
}

export default ListaOpciones
