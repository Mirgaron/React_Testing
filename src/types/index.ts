export type Salon = {
  id: number,
  name: string,
  alumnos: Alumno[],
}

export type Alumno ={
    id: number,
    nombre: string,
    apellido: string,
    activo?: boolean,
    salonId: number,
}




