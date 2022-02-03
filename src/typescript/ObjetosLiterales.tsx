interface Persona {
    nombre: string;
    edad: number;
    direccion: Direccion;

}

interface Direccion {
    pais: string,
    casaNo: number;
}



export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombre: 'Raul',
        edad: 35,
        direccion: {
            pais: 'Canada',
            casaNo: 365
        }
    }


    return (
        <>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>

        </>
    )
}
