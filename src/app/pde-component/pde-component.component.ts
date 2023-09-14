import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-pde-component',
  templateUrl: './pde-component.component.html',
  styleUrls: ['./pde-component.component.css']
})
export class PDEComponentComponent {
  @Input() infoCocina:any[] = []

  /* Esta parte esta hecha con chatgpt porque no supe como hacer para que se borre segun el pedido a entregar */
  entregarPedido(pedido:any, index:number){
    if (index >= 0 && index < this.infoCocina.length) {
      this.infoCocina.splice(index, 1);
    }
  }
  
}
