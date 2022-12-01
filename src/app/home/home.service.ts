import { Injectable } from '@angular/core';

import { Inicio } from './home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private picks : Inicio[] = [
    {
      id : '1',
      title : 'Camioneta 4x2 ',
      imageURL: 'https://first.cl/wp-content/uploads/2021/01/katana-patente-900x900-1.jpg',
      comments:['motor turbodiésel de 2.2 litros con una potencia máxima de 150 CV a 3.500 rpm y un par máximo de 400 Nm entre 1.750 rpm y 2.250 rpm','MAX PESO 2000 KG']

    },
    {
      id : '2',
      title : 'Camioneta 4x4 ',
      imageURL: 'https://first.cl/wp-content/uploads/2021/01/katana-patente-900x900-1.jpg',
      comments:['motor turbodiésel de 2.2 litros con una potencia máxima de 150 CV a 3.500 rpm y un par máximo de 400 Nm entre 1.750 rpm y 2.250 rpm','MAX PESO 3000 KG']

    }
  ]

  constructor() { }
  getPicks(){
    return [...this.picks]
  }
}
