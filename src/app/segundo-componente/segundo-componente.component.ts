import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome: string = "Breno";
  dataNascimento: string = "2012-10-11";
  urlImagem: string = "/assets/Bandeira.jpg";

  mostrarDataNascimento(): void {
    alert(`A data de nascimento do Breno é ${this.dataNascimento}`);
  }
}
