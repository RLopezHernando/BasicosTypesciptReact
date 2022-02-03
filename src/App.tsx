
//import { Funciones } from './typescript/Funciones';
//import { ObjetosLiterales } from './typescript/ObjetosLiterales';
// import { TiposBasicos } from './typescript/TiposBasicos';
//import { Contador } from './components/Contador';
//import { ContadorConHook } from './components/ContadorConHook';
//import { Login } from './components/Login';

//import { Usuarios } from "./components/Usuarios";
import { Formularios } from './components/Formularios';

const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introduccion a TS - React</h1>
      <hr />
      {/* <TiposBasicos></TiposBasicos> */}
      {/* <ObjetosLiterales></ObjetosLiterales> */}
      {/* <Funciones/> */}
      {/* { <Contador></Contador> } */}
      {/* { <ContadorConHook></ContadorConHook>} */}
      {/* { <Login></Login>} */}
      {/* <Usuarios/> */}
      {<Formularios/>}
    </div>
  )
};
export default App;
