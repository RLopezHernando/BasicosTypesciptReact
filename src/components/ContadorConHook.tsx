import { useState } from "react";
import { useCounter } from '../hooks/useCounter';

export const ContadorConHook = () => {

   const {valor,acumular} = useCounter(100);

    return (
        <>
            <h3>Contador Con Hook <small>{valor}</small></h3>
            <button className="btn btn-primary" onClick={() => acumular(1)}>
                +1
            </button>
            &nbsp;
            <button className="btn btn-primary" onClick={() => acumular(-1)}>
                -1
            </button>


        </>
    )
};
