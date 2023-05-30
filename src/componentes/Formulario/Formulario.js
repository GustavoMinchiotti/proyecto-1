import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';    //!  agregado por mí para que lo cree en cada colaborador
import "./Formulario.css"
import Campo from "../Campo/Campo"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("") /** acá traigo los inputs para almacenarlos como estado  */
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("") /** manejo del select en listaOpciones --la var equipo me da en el menú option el nombre del equipo en pantalla*/
    const id = uuidv4()//!  agregado por mí

    // manejo del form de equipos
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("function maneja envío"); // la voy a llamar con un evento html 'onSubmit'
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo,
            id//!  agregado por mí

        }
        registrarColaborador(datosAEnviar);  // envía los datos a la function dentro de app
    }
    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo, colorPrimario: color }); // la voy a llamar con un evento html 'onSubmit'
        // let datosAEnviar = {
        //     titulo,
        //     color
        // }
        // registrarColaborador(datosAEnviar);  // envía los datos a la function dentro de app
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo
                titulo="Nombre"
                placeholder="Ingresar nombre"
                required={true}
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <Campo titulo="Puesto" placeholder="Ingresar puesto" required valor={puesto} actualizarValor={actualizarPuesto} />
            <Campo titulo="Foto" placeholder="Ingresar enlace de foto" required valor={foto} actualizarValor={actualizarFoto} />
            <ListaOpciones valor={equipo} actualizarEquipo={actualizarEquipo} equipos={props.equipos} />
            <Boton>
                Crear
            </Boton>

        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo
                titulo="Título"
                placeholder="Ingresar título"
                required={true}
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <Campo
                titulo="Color"
                placeholder="Ingresar color en Hex"
                required valor={color}
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton>
                Registrar Equipo
            </Boton>
        </form>
    </section>
}

export default Formulario

