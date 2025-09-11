import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link, Navigate } from 'react-router-dom'
import { db } from '../../firebase/config'
import { addDoc, collection } from 'firebase/firestore'
import { Formik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2'
import './CheckOut.css'


const SignupSchema = Yup.object().shape({
    nombre: Yup.string()
        .min(2, 'El nombre es demasiado corto!')
        .max(50, 'Máximo 50 caracteres!')
        .required('Este campo es obligatorio'),
    dirección: Yup.string()
        .min(2, 'La dirección es demasiado corta!')
        .max(50, 'Máximo 50 caracteres!')
        .required('Este campo es obligatorio'),
    email: Yup.string().email('Email inválido').required('Este campo es obligatorio'),
});

const CheckOut = () => {

    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)



    const handleSubmit = (values) => {
        console.log("Formulario enviado", values);

        const orden = {
            cliente: values,
            items: cart.map((prod) => ({ id: prod.id, name: prod.name, price: prod.price, cantidad: prod.cantidad })),
            total: totalCompra(),
            fecha: new Date()
        }

        console.log("Submit", orden);

        const ordersRef = collection(db, 'orders')
        addDoc(ordersRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                vaciarCarrito()

            })

    }
    if (orderId) {
        Swal.fire({
            title: 'Tu orden se generó correctamente!',
            customClass: {
                confirmButton: "btn btn-dark",
            },
        })
        return (
            <div className='container my-5 text-center'>
                <h4 className='numberOrd'>Número de orden generada: {orderId} </h4>
                <div className='returnHome'>
                <Link className='btn btn-dark' to={"/"}>VOLVER AL INICIO</Link>
                </div>
            </div>
        )
    }



    if (cart.length === 0) {
        return <Navigate to="/" />
    }


    return (
        <div className='container my-5'>
            <hr></hr>
            <h3 className='checkContainer'>CHECKOUT</h3>
            <hr></hr>
            <Formik
                initialValues={{ nombre: '', dirección: '', email: '' }}
                onSubmit={handleSubmit}
                validationSchema={SignupSchema}>
                {({ handleSubmit, handleChange, values, errors }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            onChange={handleChange}
                            value={values.nombre}
                            type='text'
                            placeholder='Tu nombre'
                            className='form-control my-2'
                            name='nombre'
                        />
                        {errors.nombre && <div className='error'>{errors.nombre}</div>}
                        <input
                            onChange={handleChange}
                            value={values.dirección}
                            type='text'
                            placeholder='Tu dirección'
                            className='form-control my-2'
                            name='dirección'
                        />
                        {errors.dirección && <div className='error'>{errors.dirección}</div>}
                        <input
                            onChange={handleChange}
                            value={values.email}
                            type='email'
                            placeholder='Tu email'
                            className='form-control my-2'
                            name='email'
                        />
                        {errors.email && <div className='error'>{errors.email}</div>}
                        <div className="botonesCheck">
                            <button className='btn btn-dark' type="submit">ENVIAR</button>
                        </div>
                    </form>
                )}
            </Formik>
           
          
        </div>
    )
}

export default CheckOut