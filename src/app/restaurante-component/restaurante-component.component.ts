import { Component } from '@angular/core';

@Component({
  selector: 'app-restaurante-component',
  templateUrl: './restaurante-component.component.html',
  styleUrls: ['./restaurante-component.component.css']
})
export class RestauranteComponentComponent {
pedidoTomado:any[] = []
pedidoEnviado:any[] = []
mostrarPedido(pedido:any){
this.pedidoTomado.push(pedido)
}
enviarPedido(pedido:any){
this.pedidoEnviado.push(pedido)
}


}
