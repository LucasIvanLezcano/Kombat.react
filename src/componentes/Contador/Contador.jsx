import { useState, } from "react";


const Contador = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);



    //A useEffect le pasamos dos parametros, el primero es una funcion callback con el comportamiendo deseado, y el segundo es un array de dependencias en donde colocamos el estado que queremos estar vigilando. Cuando ese estado cambio se ejecuta nuevamente la funcion que pasamos en el primer argumento. 

    const sumarContador = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const restarContador = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div>
                <button onClick={restarContador}> - </button>
                <strong> {contador} </strong>
                <button onClick={sumarContador}> + </button>
            </div>
            <button onClick={()=> funcionAgregar(contador)}> Agregar </button>
        </>
    )
}

export default Contador