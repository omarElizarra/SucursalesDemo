export {
    SucursalI,
    EmpleadoI
}
interface SucursalI {
    id:         number,
    sucursal:   string
}

interface EmpleadoI{
    id: number,
    nombre: string,
    edad: number,
    sexo: string
    puesto: string,
    sucursal: string,
}
