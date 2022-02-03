import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const useUsuarios = () => {
    //Use State
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    //UseRef

    const paginaRef = useRef(1);

    //Cuando se nos carga la aplicacion y recibimos datos de una API deberemos utilizar "useEffect"
    useEffect(() => {
        cargarUsuarios();
    }, []);


    const cargarUsuarios = async () => {
        const resp = await reqResApi.get<ReqResListado>('/users', {
            params: {
                //Si ponemos "paginaRef" hacemos la referencia al objeto asi que tendremos que poner el ".current" para hacer
                // referencia al valor. En este caso el 1 del useRef
                page: paginaRef.current
            }
        });

        if (resp.data.data.length > 0) {
            //Si hay datos los pides y aumentas la referencia
            setUsuarios(resp.data.data);
        } else {
            paginaRef.current--;
            //Si no hay mas datos a mostrar entonces sale este aviso por pantalla
            alert('No Hay Mas Registros');
        }
    }


    const paginaSiguiente = () => {
        paginaRef.current++;
        cargarUsuarios();
    }

    const paginaAnterior = () => {
        if (paginaRef.current > 1) {
            paginaRef.current--;
            cargarUsuarios();
        }
    }

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior

    }


}
