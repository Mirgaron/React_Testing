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
        ,
        {
            id: 7,
            nombre: 'Julio',
            apellido: 'Arroyo',
            activo: true,
            salonId: 2
        }
    ]
},
{
    id: 3,
    name: '3C',
    alumnos: [
        {
            id: 5,
            nombre: 'Maria',
            apellido: 'Hernandez',
            activo: true,
            salonId: 3
        },
        {
            id: 6,
            nombre: 'Karina',
            apellido: 'Lopez',
            activo: false,
            salonId: 3
        }
    ]
}
]