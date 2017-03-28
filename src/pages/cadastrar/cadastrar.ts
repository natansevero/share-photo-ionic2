import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';

@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html'
})
export class CadastrarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarPage');
  }

  goBackLoginPage() {
    this.viewCtrl.dismiss();
  }

}
