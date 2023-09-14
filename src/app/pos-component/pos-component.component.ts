import { Component,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-pos-component',
  templateUrl: './pos-component.component.html',
  styleUrls: ['./pos-component.component.css']
})
export class POSComponentComponent {
  nombre:string
  pedido:string
  numero:number
  @Output() eventoPedido = new EventEmitter<any>();
  @Output() informacionPedido = new EventEmitter<any>();

  constructor(){
    this.nombre = ""
    this.pedido = ""
    this.numero = 0
  }


  guardarOrden(){
    this.numero = Math.floor(Math.random() * (1000)) + 1;
    let pedidoTomado = {
      nombre: this.nombre,
      descripcion: this.pedido,
      numero : this.numero
    }
    this.eventoPedido.emit(pedidoTomado)
    this.informacionPedido.emit(this.pedido)
  }

}
