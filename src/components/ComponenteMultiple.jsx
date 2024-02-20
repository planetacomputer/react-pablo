
const ComponenteMultiple = ({ opcion, dias }) => {
    function calcularCosteHotel() {
        return dias*40;
    }
    function calcularCosteVehiculo() {
        let coste = dias*40;
        if (dias > 7){
            coste = coste - 50;
        }
        else if (dias > 3){
            coste = coste - 20;
        }
        return coste;
    }
    return (
        <div>
            {opcion === 1 ? <h1>Coste hotel: { calcularCosteHotel() }</h1> :
            opcion === 2 ? <h1>Coste alquiler vehículo: {calcularCosteVehiculo()}</h1> : ''}
        </div>
    )
}
export default ComponenteMultiple;
