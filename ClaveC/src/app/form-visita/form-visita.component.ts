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

  clientes:Cliente[];
  servicios:string[];
  clienteSeleccionado:Cliente;
  mascotaSeleccionada:Mascota;
  nombreClienteSeleccionado:string;
  nombreMascotaSeleccionada:string;
  servicioSeleccionado:string;
  citas:number;
  ultimoServicio:string;
  precio:number;
  precioDescuento:number;
  descuento:number;

  enviar = false;
  numeroFactura:number;

  constructor() { }

  ngOnInit(): void {
    this.clientes = CLIENTES;
    this.servicios = ["Chequeo general", "Hospitalización", "Guardería", "Peluquería", "Cirugía", "Vacunación"];
    this.clienteSeleccionado = new Cliente;
    this.descuento = 0;
    this.precio = 0;
    this.precioDescuento = 0;
    this.numeroFactura = this.getRandomInt(1856, 4786);
  }

  //Obteniendo el nombre del cliente seleccionado del select y asignandolo a la variable nombreClienteSeleccionado
  seleccionarCliente(){
    for (let cliente of this.clientes){
      if(this.nombreClienteSeleccionado == cliente.nombre){
        this.clienteSeleccionado = cliente;
        break;
      }
    }
  }

  //Obteniendo el descuento a aplicar
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
  }
  
  //Obteniendo el servicio seleccionado y calculando costos tomando en cuenta el descuento.
  seleccionarServicio(){
    switch(this.servicioSeleccionado){
      case "Chequeo general":
        this.precio = 20;
        this.precioDescuento = this.precio - this.precio*this.descuento;
      break;
      case "Hospitalización":
        this.precio = 30;
        this.precioDescuento = this.precio - this.precio*this.descuento;
      break;
      case "Guardería":
        this.precio = 10;
        this.precioDescuento = this.precio - this.precio*this.descuento;
      break;
      case "Peluquería":
        this.precio = 15;
        this.precioDescuento = this.precio - this.precio*this.descuento;
      break;
      case "Cirugía":
        this.precio = 100;
        this.precioDescuento = this.precio - this.precio*this.descuento;
      break;
      case "Vacunación":
        this.precio = 25;
        this.precioDescuento = this.precio - this.precio*this.descuento;
      break;
    }
  }

  //Se guardan los datos de la cita
  //Se incrementa por 1 la cantidad de citas de la mascota
  //Se almacena el servicio seleccionado en el atributo ultimoServicio de la mascota
  registrarCita(){
    for (let cliente of this.clientes){
      if(cliente.nombre == this.nombreClienteSeleccionado){
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

  regresarFormulario(formulario:NgForm){
    this.enviar = false;
    this.citas = 0;
    this.ultimoServicio = "";
    this.descuento = 0;
    this.precio = 0;
    this.precioDescuento = 0;
    formulario.reset();
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
export class AppComponent{

}
