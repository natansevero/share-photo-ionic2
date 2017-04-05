import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController, AlertController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { PostsService } from '../../providers/posts-service';

@Component({
  selector: 'page-deseja-postar',
  templateUrl: 'deseja-postar.html'
})
export class DesejaPostarPage {

  private id;
  private foto;
  private descricao;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private viewCtrl: ViewController, private storage: Storage,
              private postsService: PostsService, private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {
    this.id = this.navParams.get('id') || {};
    this.foto = this.navParams.get('foto') || {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DesejaPostarPage');
  }

  cancelar() : void {
    this.viewCtrl.dismiss();
  }

  postar() : void {
    let post = {
      id: this.id,
      foto: this.foto,
      descricao: this.descricao
    }

    let loader = this.loadingCtrl.create({
      content: 'Espere um momento'
    });
    loader.present();

    this.postsService.postarFotoService(post)
        .then(res => {

          loader.dismiss();

          if(res.msg) {
            let alert = this.alertCtrl.create({
              title: 'Erro ao Postar Foto. Verifique os dados!',
              buttons: ['OK']
            });
            alert.present();
          } else {
            let alert = this.alertCtrl.create({
              title: 'Foto postada com sucesso!',
              buttons: [{
                  text: "Ok",
                  handler: () => {
                    this.viewCtrl.dismiss();
                  }
              }]
            });
            alert.present();
          }

        })
        .catch(err => {
          console.log("Err:", err);
          let alert = this.alertCtrl.create({
            title: 'Erro ao Postar Foto. Verifique os dados!',
            buttons: ['OK']
          });
          alert.present();
        })

    //Temporario
    //this.storage.remove('_id_usuario');
  }

}
