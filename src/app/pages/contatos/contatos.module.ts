import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContatosPageRoutingModule } from './contatos-routing.module';

import { ContatosPage } from './contatos.page';

import { SimpleMaskModule } from 'ngx-ion-simple-mask'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContatosPageRoutingModule,
    //SimpleMaskModule
  ],
  declarations: [ContatosPage]
})
export class ContatosPageModule {}
