import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

    // destructuración llama un solo vez a las props con ruta completa y luego usa las variables
    const { titulo, colorPrimario, id } = props.datos //? acá llamo a las props una sola vez

    const { colaboradores, eliminarColaborador, actualizarColor, like } = props

    const obj = { // esta crea el objeto estilo con la sintaxis de .js y la props lo inserta en style linea 13
        backgroundColor: hexToRgba(colorPrimario, 0.6)  // donde era color secundario uso primario con modificación
    }
    const estiloTitulo = { borderColor: colorPrimario }

    return <>
        {
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <input
                    type="color"
                    className="input-color"
                    value={colorPrimario}  //*cambio a primario cuando instalé hexToRgba, pero no funciona en el inline 
                    onChange={(evento) => {
                        actualizarColor(evento.target.value, id);   //guarda del evento el valor del color elegido * recibe el color y titulo
                    }}
                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) =>
                            <Colaborador
                                datos={colaborador}
                                key={index} //* acá  retorno un colaborador por cada uno del arreglo
                                colorPrimario={colorPrimario}  // envío color como props a colaborador
                                eliminarColaborador={eliminarColaborador} // la func va a cada colaborador
                                like={like}
                            />)
                    }
                </div>

            </section>
        }
    </>
}

export default Equipo