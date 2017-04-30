import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

import { DesejaPostarPage } from '../deseja-postar/deseja-postar';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-postar-foto',
  templateUrl: 'postar-foto.html'
})
export class PostarFotoPage {

  private id;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private camera: Camera, private modalCtrl: ModalController,
              private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostarFotoPage');
    this.storage.get('_id_usuario').then(value => {
      let user = JSON.parse(value);
      this.id = user._id;
    });
  }

  tirarFoto() : void {
    const options = {
        pictureSourceType: this.camera.PictureSourceType.CAMERA,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      console.log('data:image/jpeg;base64,' + imageData);

      let modal = this.modalCtrl.create(DesejaPostarPage, {
        id: this.id,
        foto: 'data:image/jpeg;base64,' + imageData
      });
      modal.present();

    }, (err) => {
      console.log('Error:', err);
    });

  }
}
