import { Component, Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cocina-component',
  templateUrl: './cocina-component.component.html',
  styleUrls: ['./cocina-component.component.css']
})
export class CocinaComponentComponent {
  @Input() pedidoCocina:any
  @Output() pedidoListoParaEntregar = new EventEmitter<any>();

  pedidoEnCoccion: any | null = null; //Puede ser ANY o Nulo, en este caso se incializa en nulo
  pedidosTerminados: any[] = [];
  btnHabilitado:boolean = false;

  cocinar(pedido:any){  
    if(!this.pedidoEnCoccion ){
      this.pedidoEnCoccion = pedido //A pedido en coccion se le asigna el pedido solo 
      this.btnHabilitado = true
    }
  }

  almacenarPedido(informacion:any){ //Creo un metodo para almacenar la informacion del pedido. Se ejecuta a partir de que se realizo la coccion (secuencial)
    this.pedidoListoParaEntregar.emit(informacion)
  }
  
  btnPedido(pedido:any){
    this.pedidosTerminados.push(pedido)
    this.almacenarPedido(pedido);
    this.pedidoEnCoccion = "" //Una vez finalizado el pedido, se limpia el pedido en coccion para permitir que entre otro a la cocina
    this.btnHabilitado = false
  }
}
