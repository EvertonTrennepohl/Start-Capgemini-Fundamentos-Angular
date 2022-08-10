import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servico1',
  templateUrl: './exemplo-servico1.component.html',
  styleUrls: ['./exemplo-servico1.component.css']
})
export class ExemploServico1Component {

  nome: string = "";

  constructor(private loggerService: LoggerService) {

  }

  adicionarNome(): void {
    this.loggerService.logar(`O nome ${this.nome} foi adicionado!`);
  }

  exibirLogs(): void {
    this.loggerService.exibeTodosLogs();
  }

}
