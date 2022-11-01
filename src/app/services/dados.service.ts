import { Injectable } from '@angular/core';

import { contato } from '../models/contato.model';

import { Storage } from '@ionic/storage-angular'

import { Guid } from 'guid-typescript'

@Injectable({
  providedIn: 'root'
})
export class DadosService {



  constructor(private storage : Storage) { }


  async EnviarTodosContatos(){
     let arrayContato: contato [] = [];



     await this.storage.forEach((value: string)=>{const contato : contato = JSON.parse(value); arrayContato.push(contato)})

     return arrayContato
  }



  async filtrar(id:any){
    const select = await this.storage.get(id);
    const slct = JSON.parse(select)
  }

 

  // ExcluirContatoId(contatoRecebido : any){
  //   this.contatos.splice(this.contatos.indexOf(contatoRecebido), 1)
  // }

  InserirContato(argumento:contato){
    argumento.id = Guid.create()

    this.storage.set(argumento.id.toString(),  JSON.stringify(argumento))

  }






}
