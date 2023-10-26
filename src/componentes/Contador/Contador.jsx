import { useState, useEffect } from "react";


const Contador = () => {
    const [contador, setContador] = useState(1);

    useEffect(()=> {
        document.title = `Contador: ${contador} `;

    }, [contador])

    //A useEffect le pasamos dos parametros, el primero es una funcion callback con el comportamiendo deseado, y el segundo es un array de dependencias en donde colocamos el estado que queremos estar vigilando. Cuando ese estado cambio se ejecuta nuevamente la funcion que pasamos en el primer argumento. 

    const sumarContador = () => {
        setContador(contador + 1);
    }

    const restarContador = () => {
        setContador(contador - 1);
    }

  return (
    <div>
        <button onClick={restarContador}> - </button>
        <strong> {contador} </strong>
        <button onClick={sumarContador}> + </button>

    </div>
  )
}

export default Contador