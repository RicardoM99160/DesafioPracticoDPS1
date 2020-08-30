//Datos de los clientes que alimentan la aplicación
//Estos datos simulan la parte de la base de datos

import { Cliente } from './cliente';

export const CLIENTES:Cliente[]=[
    {nombre:'Laura Burgos', dui:'12345678-9', mascotas:[
        {nombre:'Wallly', citas:1, medicamento:'Antiparasitario', ultimoServicio:'Chequeo general'},
        {nombre:'Ranger', citas:3, medicamento:'Ninguno', ultimoServicio:'Guardería'}
    ]},
    {nombre:'Juán Ramón', dui:'32145678-7',mascotas:[
        {nombre:'Whisper', citas:5,medicamento:'Suero', ultimoServicio:'Hospitalización'},
        {nombre:'Bongo', citas:2, medicamento:'Anestesia', ultimoServicio:'Cirugía'}
    ]},
    {nombre:'Rosario Aguilar', dui:'87654321-0', mascotas:[
        {nombre:'Klaus', citas:6, medicamento:'Vacuna contra rabia', ultimoServicio:'Vacunación'},
        {nombre:'Arka', citas:0, medicamento:'Ninguno', ultimoServicio:'Peluquería'}
    ]},
    {nombre:'Feliciano Ledesma', dui:'45678912-3', mascotas:[
        {nombre:'Mila', citas:8, medicamento:'Desparacitante', ultimoServicio:'Chequeo general'},
        {nombre:'Cash', citas:4, medicamento:'Ninguno', ultimoServicio:'Guardería'}
    ]},
    {nombre:'Jessica Carrera', dui:'96325874-1', mascotas:[
        {nombre:'Tupac', citas:10, medicamento:'Antibiótico', ultimoServicio:'Hospitalización'},
        {nombre:'Candy', citas:7, medicamento:'Anestesia', ultimoServicio:'Cirugía'}
    ]},
]