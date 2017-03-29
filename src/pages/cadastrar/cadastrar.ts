import { Component } from '@angular/core';
import { NavController, NavParams,ViewController, LoadingController, AlertController } from 'ionic-angular';
import { UsersService } from '../../providers/users-service';

@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html'
})
export class CadastrarPage {

  private email: String;
  private nome: String;
  private nome_usuario: String;
  private senha: String;
  private sexo: String;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private viewCtrl: ViewController, private usersService: UsersService,
              private loadingCtrl: LoadingController, private alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarPage');
  }

  goBackLoginPage() {
    this.viewCtrl.dismiss();
  }

  cadastrarUsuario() : void {
    let usuario = {
      email: this.email,
      nome: this.nome,
      nome_usuario: this.nome_usuario,
      senha: this.senha,
      sexo: this.sexo
    }

    let loader = this.loadingCtrl.create({
      content: 'Espere um momento'
    });
    loader.present();

    this.usersService.cadastrarUsuarioService(usuario)
        .then(res => {
          console.log("Res:", res);

          loader.dismiss();

          let alert = this.alertCtrl.create({
            title: 'Usuário criado com sucesso!',
            buttons: ['OK']
          });
          alert.present();

          this.viewCtrl.dismiss();
        })
        .catch(err => {
          console.log("Err:", err);

          let alert = this.alertCtrl.create({
            title: 'Error ao cadastrar!',
            buttons: ['OK']
          });
          alert.present();
        });
  }

}
