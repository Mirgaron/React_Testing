import type { Salon } from "../types";

export const dataSalones :Salon[] = [{
    id: 1,
    name: '1A',
    alumnos: [
        {
            id: 1,
            nombre: 'Juan',
            apellido: 'Pérez',
            activo: true,
            salonId: 1
        },
        {
            id: 2,
            nombre: 'María',
            apellido: 'Gómez',
            activo: true,
            salonId: 1
        }
    ]
},
{
    id: 2,
    name: '2B',
    alumnos: [
        {
            id: 3,
            nombre: 'Pedro',
            apellido: 'López',
            activo: true,
            salonId: 2
        },
        {
            id: 4,
            nombre: 'Ana',
            apellido: 'Martínez',
            activo: false,
            salonId: 2
        }
    ]
}]