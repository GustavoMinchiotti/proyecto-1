import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/MiOrg';
import Equipo from "./componentes/Equipo/Equipo";
import Footer from "./componentes/Footer/Footer";
import Colaborador from "./componentes/Colaborador/Colaborador";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);

  const [colaboradores, actualizarColaboradores] = useState([])

  //? Lista de equipos. --- copiado del componente listaOpciones para usar en Equipo --- 
  // este objeto va a contener colores y nombres de equipo para que react lo construya.
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuidv4(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuidv4(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuidv4(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuidv4(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuidv4(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuidv4(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  //? Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador", colaborador);
    actualizarColaboradores([...colaboradores, colaborador])  // acá el factor de propagación suma al array los nuevos colaboradores
  }

  //? Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("elimina colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores) // guarda el nuevo array con los borrados
  }

  //? Actualizar color de equipo
  // recibe 2 params el color que va usar y el titulo para identificar que equipo lo cambia
  const actualizarColor = (color, id) => {
    console.log("actualizar color: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados) //  Necesitamos indicar a React que hay nuevos datos, en nuestro useState le voy a mandar el nuevo valor de equiposActualizados.
  }

  //? Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuidv4() }]) //! Gran manejo de arrays
  }

  // func favoritos
  const like = (id) => {
    console.log("like", id);
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      {mostrarFormulario && <Formulario
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
      />}
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}

      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} //AHORA Le paso el array de colaboradores que se va creando
          eliminarColaborador={eliminarColaborador} //para agregar a Equipo.js
          actualizarColor={actualizarColor} // paso la func como props a equipo
          like={like}
        />
        )
      }

      <Footer />
    </div>
  );
}

export default App;