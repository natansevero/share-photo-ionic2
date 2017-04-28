import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EditarContaPage } from '../editar-conta/editar-conta';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  pageEditarConta() : void {
    this.navCtrl.push(EditarContaPage);
  }
}
