import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CadastrarPage } from '../cadastrar/cadastrar';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToCadastrarPage() {
    this.navCtrl.push(CadastrarPage);
  }

}
