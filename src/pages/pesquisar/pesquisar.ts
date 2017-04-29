import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UsersService } from '../../providers/users-service';

@Component({
  selector: 'page-pesquisar',
  templateUrl: 'pesquisar.html'
})
export class PesquisarPage {

  private users = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private usersService: UsersService) {
      this.inicializeUsers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PesquisarPage');
  }

  private inicializeUsers() {
    this.usersService.getUsuariosService()
        .then(res => {
          this.users = res.json();
        })
        .catch(err => {
          console.log(err);
        });
  }

  getUsuarios(ev: any) : void {
    let nome_pesquisa = ev.target.value;

    if (nome_pesquisa && nome_pesquisa.trim() != '') {
      this.users = this.users.filter((user) => {
        return (user.nome_usuario.toLowerCase().indexOf(nome_pesquisa.toLowerCase()) > -1);
      })
    }
  }

}
