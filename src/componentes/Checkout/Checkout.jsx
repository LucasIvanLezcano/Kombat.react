import React, { useContext, useState, useEffect } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { db } from '../../services/config';
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';




const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState(""); 
    const [error, setError] = useState("");
    const [ordenID, setOrdenId] = useState("");


    const {carrito, vaciarCarrito, total, totalCantidad} = useContext
    (CarritoContext)

    const  manejadorFormulario = (event) => {
            event.preventDefault ();

            if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
                setError("Por favor completa todos los campos");
                return;
            }

            if (email !== emailConfirmacion) {
                setError("los campos del email no coindicen")
            }

            const orden = {
                items : carrito.map(producto => ({
                    id: producto.item.id,
                    nombre: producto.item.nombre,
                    cantidad: producto.cantidad
                })),
                total:total, 
                fecha: new Date(),
                nombre,
                apellido,
                telefono,
                email
            };

            Promise.all(
                orden.items.map( async (productoOrden) => {
                    const productoRef = doc(db, "inventario", productoOrden.id);
                    
                    const productoDoc = await getDoc(productoRef);
                    const stockActual = productoDoc.data().stock;

    
                    await updateDoc( productoRef, {
                        stock: stockActual - productoOrden.cantidad
                    })

                })
            )
            .then(() => {

                addDoc(collection(db, "ordenes"), orden)
                .then(docRef => {
                    setOrdenId(docRef.id);
                    vaciarCarrito();
                })
                .catch( error => {
                    console.log("Error al crear la orden", error);
                    setError("Se produjo un error al crear la orden");
                })
            })
            .catch((error) => {
                console.log("No se pudo actualizar el stock", error);
                setError("No se puede actualizar el stock");
            })
    
        }

  return (
    <div>
        <h2>Checkout</h2>


        <form onSubmit={manejadorFormulario}>
            {
                    carrito.map(producto => (
                        <div key={producto.item.id}>
                            <p> {producto.item.nombre} x {producto.cantidad} </p>
                            <p>{producto.item.precio}</p>
                            <h3>Total: ${total}</h3>
                            <hr />
                        </div>
                    ))
            }
            <div>
                <label htmlFor="">Nombre:</label>
                <input type="text" onChange={(e) => setNombre(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="">Apellido:</label>
                <input type="text" onChange={(e) => setApellido(e.target.value)} />
            </div>

            <div>
                <label htmlFor="">Telefono</label>
                <input type="text" onChange={(e)=> setTelefono(e.target.value)} />
            </div>

            <div>
                <label htmlFor="">Email:</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="">Confirmar Email:</label>
                <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)}/>
            </div>

            {
                error && <p> {error} </p>
            }

            <button type='submit'> Confirmar Compra </button>

            {
                ordenID && (
                    <strong> Gracias por tu compra ! Tu numero de orden es :{ordenID} </strong>
                )
            }

        </form>

    </div>
  )
}

export default Checkout