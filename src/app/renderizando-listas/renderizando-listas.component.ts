import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {

  celulares: Celular[] = [
    {
      id: 1,
      nome: "Sony Xperia X",
      descricao: "Celular 4G Tela 5\"",
      esgotado: false
    },
    {
      id: 2,
      nome: "Motorola G5",
      descricao: "Celular 4G Tela 6\"",
      esgotado: false
    },
    {
      id: 3,
      nome: "Samsung S20",
      esgotado: true
    }
  ];

}
