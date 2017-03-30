import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { CadastrarPage } from '../cadastrar/cadastrar';

import { Storage } from '@ionic/storage';
import { UsersService } from '../../providers/users-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  private nome_usuario: String;
  private senha: String;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private usersService: UsersService, private loadingCtrl: LoadingController,
              private alertCtrl: AlertController, private storage: Storage) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToCadastrarPage() {
    this.navCtrl.push(CadastrarPage);
  }

  autenticarUsuario() : void {
    let login = {
      nome_usuario: this.nome_usuario,
      senha: this.senha
    }

    let loader = this.loadingCtrl.create({
      content: 'Espere um momento'
    });
    loader.present();

    this.usersService.autenticarUsuarioService(login)
      .then(res => {
        console.log("Res:", res);

        loader.dismiss();

        if(!res.ok) {
          let alert = this.alertCtrl.create({
            title: 'Erro ao Logar. Verifique os dados!',
            buttons: ['OK']
          });
          alert.present();
        } else {
          this.storage.set('_id_usuario', res._body);
          this.storage.get('_id_usuario').then((value) => {
            console.log(value);
          });

          this.storage.remove('_id_usuario');
        }
      })
      .catch(err => {
        console.log("Err:", err);
      });
  }

}
