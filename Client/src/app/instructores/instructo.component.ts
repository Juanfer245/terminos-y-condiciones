import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './instructo.component.html',
  styleUrls: ['./instructo.component.css']
})
export class InstructorComponent {
	@Input()
  cantidad!: number;
	elementosCarrito!: {};
	//cantidad;
	elementosMostrar: any;


  constructor() {

   }

  	obtenerLocalStorage(){
}

	contador(){

		this.cantidad = Object.keys(this.elementosCarrito).length
}
	}

