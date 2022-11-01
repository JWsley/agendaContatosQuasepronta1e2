import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesPageRoutingModule } from './detalhes-routing.module';

import { DetalhesPage } from './detalhes.page';

import { SimpleMaskModule } from 'ngx-ion-simple-mask'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesPageRoutingModule,
    ReactiveFormsModule,//módulo usado para validar formulários
    SimpleMaskModule// modulo usado para criar mascaras no input do HTML
  ],
  declarations: [DetalhesPage]
})
export class DetalhesPageModule {}
