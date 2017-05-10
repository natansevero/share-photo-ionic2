import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PostsService } from '../../providers/posts-service';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {

  private id;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private storage: Storage, private postsService: PostsService) {

                this.storage.get('_id_usuario').then(value => {
                  let user = JSON.parse(value);
                  this.id = user._id;
                  // this.getFeed();
                });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

  // private getFeed() : void {
  //   this.postsService.getFeedService(this.id)
  //       .then(res => {
  //         console.log(res.json());
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       })
  // }

}
