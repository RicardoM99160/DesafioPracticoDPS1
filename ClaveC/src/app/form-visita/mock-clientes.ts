import { Cliente } from './cliente';

export const CLIENTES:Cliente[]=[
    {nombre:'Laura Burgos', mascotas:[
        {nombre:'Wallly', citas:1, ultimoServicio:'Chequeo general'},
        {nombre:'Ranger', citas:3, ultimoServicio:'Guarderia'}
    ]},
    {nombre:'Juán Ramón', mascotas:[
        {nombre:'Whisper', citas:5, ultimoServicio:'Hospitalización'},
        {nombre:'Bongo', citas:2, ultimoServicio:'Cirugia'}
    ]},
    {nombre:'Rosario Aguilar', mascotas:[
        {nombre:'Klaus', citas:6, ultimoServicio:'Vacunacion'},
        {nombre:'Arka', citas:0, ultimoServicio:'Peluqueria'}
    ]},
    {nombre:'Feliciano Ledesma', mascotas:[
        {nombre:'Mila', citas:8, ultimoServicio:'Chequeo general'},
        {nombre:'Cash', citas:4, ultimoServicio:'Guarderia'}
    ]},
    {nombre:'Jessica Carrera', mascotas:[
        {nombre:'Tupac', citas:10, ultimoServicio:'Hospitalización'},
        {nombre:'Candy', citas:7, ultimoServicio:'Cirugía'}
    ]},
]