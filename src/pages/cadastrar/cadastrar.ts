import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
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
              private viewCtrl: ViewController, private usersService: UsersService) {}

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

    this.usersService.cadastrarUsuarioService(usuario)
        .then(res => {
          alert("Cadastrado com Sucesso!");
          console.log("Res:", res);
        })
        .catch(err => {
          alert("Error");
          console.log("Err:", err);
        });
  }

}
