//Componente de React
export const TiposBasicos = () => {

    let nombre: string | number = 'Fernando';
    const edad: number = 35;
    const estActivo:boolean = false;


    const poderes: (string|number|boolean) [] = ['Velocidad', 'Volar' , 'Respirar en el Agua'];
    poderes.push(1);
    poderes.push('123');
    poderes.push(true);


    return (
        <>
            <h3>Tipos Basicos</h3>
            {nombre}, {edad}, { (estActivo) ? 'Activo' : 'No Activo'}
            <br/>
            { poderes.join(', ')}
        </>
    )
};
