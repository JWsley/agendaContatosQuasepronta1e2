import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { DadosService } from 'src/app/services/dados.service';
import { AlertController, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Guid } from 'guid-typescript'
import { contato } from 'src/app/models/contato.model'


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})

export class DetalhesPage implements OnInit {

  public contatoForm : FormGroup //objeto usado para validar o formulário
  public detalhesContato : any //objeto que recebe os valores do array criado na classe "service"
  public modoEdicao = false //objeto modo de edição
  private Contato : contato
  public arrayContato : any

  public arraydetalhe:any

  constructor(
    private objRoute : ActivatedRoute, //objeto usado para 'pegar' o id do contato passado através da pagina inicial
    private alertController: AlertController,// objeto usado para criar a caixa de alerta
    public navCtrl: NavController, //objeto usado voltar de pagina


    private objDadosService : DadosService, //objeto usado para chamar métodos da classe "service"
    public formBuilder : FormBuilder, // objeto construtor de formulário


    ) { }

    // método que cria (renderiza) uma caixa de alerta
    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Deseja remover o contato da lista?!',
        buttons: [
          {
            text: 'Não',
            handler: () => {
              ;
            },
          },
          {
            text: 'Sim',
            handler: () => {
              //botão 'Sim' chama o método que exclui contato
           
              this.navCtrl.back()
              ;
            },
          },
        ],
      });
      await alert.present();
    }




  //método é carregado junto com a página HTML
  ngOnInit() {
      this.modoEdicao = false
      this.Contato = {id: Guid.createEmpty(),nome:"",sobrenome:"",tipo:"",telefone:"",email:""}
    // validação do formulário enviado pela pagina HTML
    this.contatoForm = this.formBuilder.group({
     id: [this.Contato.id],
      nome : [this.Contato.nome, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
      sobrenome : [this.Contato.sobrenome],
      tipo : [this.Contato.tipo, Validators.required],
      telefone : [this.Contato.tipo, Validators.required],
      email : [this.Contato.email, Validators.email]
      })

    // captura do id do contato


    //id maior que 0, contato já existe então é carregado no objeto detalhesContato os valores salvos no array da classe "service"

  }

  IniciarEdicao(){
    this.modoEdicao = true
  }

  EncerrarEdicao(){

    const id : number = Number(this.objRoute.snapshot.paramMap.get('id'))

    if(id > 0){
      if (this.contatoForm.valid){
        this.modoEdicao = false
      }
    }

    else{
      if (this.contatoForm.valid){
      this.objDadosService.InserirContato(this.detalhesContato)
      this.modoEdicao = false
      }
    }
  }


  enviar(){

    if(this.contatoForm.valid){
      this.objDadosService.InserirContato(this.contatoForm.value)




    }


  }


  idsg(){

    for (let x = 0; x< this.arrayContato.Length();x++){
      console.log(this.arrayContato.id)


    }


  }



  }

