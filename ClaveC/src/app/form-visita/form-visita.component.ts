import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { Cliente } from './cliente';
import { Mascota } from './mascota';
import { CLIENTES } from './mock-clientes';

@Component({
  selector: 'app-form-visita',
  templateUrl: './form-visita.component.html',
  styleUrls: ['./form-visita.component.css']
})
export class FormVisitaComponent implements OnInit {

  //Declaración de variables a utilizar
  clientes:Cliente[];
  servicios:string[];
  medicamentos:string[];
  clienteSeleccionado:Cliente;
  mascotaSeleccionada:Mascota;
  nombreClienteSeleccionado:string;
  duiClienteSeleccionado:string;
  nombreMascotaSeleccionada:string;
  servicioSeleccionado:string;
  medicamentoSeleccionado:string;
  citas:number;
  ultimoServicio:string;
  precio:number;
  precioMedicamento:number;
  precioDescuento:number;
  descuento:number;

  enviar = false;
  numeroFactura:number;

  constructor() { }

  //Se obtienen los datos de ls clientes y se inicializan las variables que alimentan el formulario 
  ngOnInit(): void {
    this.clientes = CLIENTES;
    this.servicios = ["Chequeo general", "Hospitalización", "Guardería", "Peluquería", "Cirugía", "Vacunación"];
    this.medicamentos = ["Ninguno", "Antiparasitario", "Suero", "Anestesia", "Vacuna contra rabia", "Desparacitante", "Antibiótico"];
    this.clienteSeleccionado = new Cliente;
    this.descuento = 0;
    this.precio = 0;
    this.precioDescuento = 0;
    this.numeroFactura = this.getRandomInt(1856, 4786);
  }

  //Obteniendo el objeto del cliente a partir de su nombre seleccionado en el select 
  //y asignandolo a la variable clienteSeleccionado
  seleccionarCliente(){
    for (let cliente of this.clientes){
      if(this.duiClienteSeleccionado == cliente.dui){
        this.nombreClienteSeleccionado = cliente.nombre;
        this.clienteSeleccionado = cliente;
        break;
      }
    }
  }

  //Obteniendo el descuento a aplicar en base a las citas de la mascota seleccionada
  descuentoAplicado(){
    for (let mascota of this.clienteSeleccionado.mascotas){
      if(mascota.nombre == this.nombreMascotaSeleccionada){
        this.mascotaSeleccionada = mascota;
        this.citas = mascota.citas;
        this.ultimoServicio = mascota.ultimoServicio;
        if(mascota.citas >= 2 && mascota.citas <= 4){
          this.descuento = 0.05;
        }else if(mascota.citas > 4){
          this.descuento = 0.1;
        }
        break;
      }
    }
    this.medicamentoSeleccionado = "";
    this.servicioSeleccionado = "";
  }

  //Obteniendo el medicamento seleccionado y calculando costos tomando en cuenta el descuento.
  seleccionarMedicamento(){
    switch(this.medicamentoSeleccionado){
      case "Ninguno":
        this.precioMedicamento = 0;
      break;
      case "Antiparasitario":
        this.precioMedicamento = 5;
      break;
      case "Suero":
        this.precioMedicamento = 10;
      break;
      case "Anestesia":
        this.precioMedicamento = 25;
      break;
      case "Vacuna contra rabia":
        this.precioMedicamento = 15;
      break;
      case "Desparacitante":
        this.precioMedicamento = 7;
      break;
      case "Antibiótico":
        this.precioMedicamento = 3;
      break;
    }
    this.servicioSeleccionado = "";
    this.precio = this.precioMedicamento;
    this.precioDescuento = this.precio - this.precio*this.descuento;
  }
  
  //Obteniendo el servicio seleccionado y calculando costos tomando en cuenta el descuento.
  seleccionarServicio(){
    switch(this.servicioSeleccionado){
      case "Chequeo general":
        this.precio = 20 + this.precioMedicamento;
      break;
      case "Hospitalización":
        this.precio = 30 + this.precioMedicamento;
      break;
      case "Guardería":
        this.precio = 10 + this.precioMedicamento;
      break;
      case "Peluquería":
        this.precio = 15 + this.precioMedicamento;
      break;
      case "Cirugía":
        this.precio = 100 + this.precioMedicamento;
      break;
      case "Vacunación":
        this.precio = 25 + this.precioMedicamento;
      break;
    }
    this.precioDescuento = this.precio - this.precio*this.descuento;
  }

  //Se guardan los datos de la cita
  //Se incrementa por 1 la cantidad de citas de la mascota
  //Se almacena el servicio seleccionado en el atributo ultimoServicio de la mascota
  //Se incrementa el numero de la factura
  registrarCita(){
    for (let cliente of this.clientes){
      if(cliente.dui == this.duiClienteSeleccionado){
        for(let mascota of cliente.mascotas){
          if(mascota.nombre == this.nombreMascotaSeleccionada){
            mascota.citas++;
            mascota.ultimoServicio = this.servicioSeleccionado;
            break;
          }
        }
        console.log(cliente);
        break;
      } 
    }
    this.numeroFactura++;
    this.enviar = true;
  }

  //Función para vaciar los campos del formulario y eliminar el valor de algunas
  regresarFormulario(formulario:NgForm){
    this.enviar = false;
    this.nombreClienteSeleccionado = "";
    this.citas = 0;
    this.ultimoServicio = "";
    this.descuento = 0;
    this.precio = 0;
    this.precioDescuento = 0;
    formulario.reset();
  }

  //Función para obtener un numero aleatorio entre un rango que se utiliza para el número de la factura
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
export class AppComponent{

}
