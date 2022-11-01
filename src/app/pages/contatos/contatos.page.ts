import { Component, OnInit } from '@angular/core';
import { DadosService } from 'src/app/services/dados.service';




@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.page.html',
  styleUrls: ['./contatos.page.scss'],
})
export class ContatosPage implements OnInit {

  public todosContatos : any

  constructor(
    private objDadosService : DadosService) { this.objDadosService.EnviarTodosContatos().then(todosContatos => {this.todosContatos = todosContatos }) }

  ngOnInit() {

  }

}
