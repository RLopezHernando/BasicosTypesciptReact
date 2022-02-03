import { useEffect, useReducer } from "react";

interface AuthState {
    validando: boolean,
    token: string | null,
    username: string,
    nombre: string
}

export const Login = () => {

    const initialState: AuthState = {
        validando: true,
        token: null,
        username: '',
        nombre: ''
    };

    //Las acciones en un reducer tienen dos partes 
    // 1. type 
    // 2. payload ---> Es lo que le quieres mandar al reducer

    type LoginPayload = {
        username: string;
        nombre: string;
    }

    type AuthAction =
        | { type: 'logout' }
        | { type: 'login', payload: LoginPayload };


    const authReducer = (state: AuthState, action: AuthAction): AuthState => {

        switch (action.type) {
            case 'logout':
                return {
                    validando: false,
                    token: null,
                    username: '',
                    nombre: ''
                }

            case 'login':
                const { nombre, username } = action.payload;
                return {
                    validando: false,
                    token: 'ABC123',
                    username,
                    nombre
                }


            default:
                return state;
        }

    }


    //reducer --> Funcion para retornar un nuevo estado
    //initialState ---> Estado Inicial

    // Desestructuracion de Javascript
    // Aqui podemos ver un ejemplo de desestructuracion
    // {validando} -> validando proviene de 

    const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState);

    // useEffect --> Hook utilizado en React para disparar efectos secundarios
    // En este caso algo pasara cuando pasen 1,5 seg

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
        }, 1500);
    }, []);


    const login = () => {
        dispatch(
            {
                type: 'login',
                payload: {
                    nombre: 'Raul',
                    username: 'Kinwi'
                }
            });
    }

    const logout = () => {
        dispatch(
            {
                type: 'logout'

            });
    }



    if (validando) {
        //En react siempre hay que regresar un fragment o un objeto

        return (
            <>
                <div className="alert alert-info">
                    Validando...
                </div>

            </>
        )
    }

    return (
        <>
            <h3>Login</h3>

            {
                (token)
                    ? <div className="alert alert-success">Autenticado como {nombre}</div>
                    : <div className="alert alert-danger">No Autenticado...</div>
            }

            {
                (token) ? (<button className="btn btn-danger" onClick={logout}>Logout</button>)
                    : (<button className="btn btn-primary" onClick={login}>Login</button>)
            }

        </>
    )

};
