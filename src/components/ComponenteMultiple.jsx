const ComponenteMultiple = ({ opcion, dato1, dato2 }) => {
    return (
        <div>
            {opcion === 1 ? <h1>En grados Fahrenheit es: {(dato1*9/5)+32}</h1> :
            opcion === 2 ? <h1>En dólares es: {dato1 * 1.5}</h1> :
            opcion === 3 ? <h1>El área del rectangulo es: {dato1*dato2}</h1> : ''}
        </div>
    )
}
export default ComponenteMultiple;
