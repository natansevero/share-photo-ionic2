import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EditarContaPage } from '../editar-conta/editar-conta';

import { UsersService } from '../../providers/users-service';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

  private id;
  private user = {
    _id: "",
    email: "",
    nome: "",
    nome_usuario: "",
    postagens: [{foto: ""}],
    seguidores: [],
    seguindo: [],
    foto_perfil: "",
    descricao: "",
    senha: "",
    sexo: ""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private usersService: UsersService, private storage: Storage) {

                this.storage.get('_id_usuario').then(value => {
                  let user = JSON.parse(value);
                  this.id = user._id;
                  this.getUser();
                });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  pageEditarConta() : void {
    this.navCtrl.push(EditarContaPage);
  }

  private getUser() : void {
    this.usersService.getUserService(this.id)
        .then(res => {
          this.user = res.json()
          console.log(this.user);
        })
        .catch(err => {
          console.log(err);
        })
  }
}
